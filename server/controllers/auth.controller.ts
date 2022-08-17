import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import * as grpc from '@grpc/grpc-js';
import {
  createUser,
  findUniqueUser,
  findUser,
  signTokens,
  updateUser,
} from '../services/user.service';
import { SignUpUserInput__Output } from '../../pb/auth/SignUpUserInput';
import { SignInUserInput__Output } from '../../pb/auth/SignInUserInput';
import { SignInUserResponse__Output } from '../../pb/auth/SignInUserResponse';
import { SignUpUserResponse } from '../../pb/auth/SignUpUserResponse';
import { RefreshTokenInput__Output } from '../../pb/auth/RefreshTokenInput';
import { RefreshTokenResponse } from '../../pb/auth/RefreshTokenResponse';
import { signJwt, verifyJwt } from '../utils/jwt';
import customConfig from '../config/default';
import redisClient from '../utils/connectRedis';
import { VerifyEmailInput__Output } from '../../pb/auth/VerifyEmailInput';
import { GenericResponse } from '../../pb/auth/GenericResponse';
import Email from '../utils/email';

export const registerHandler = async (
  req: grpc.ServerUnaryCall<SignUpUserInput__Output, SignUpUserResponse>,
  res: grpc.sendUnaryData<GenericResponse>
) => {
  try {
    const hashedPassword = await bcrypt.hash(req.request.password, 12);
    const user = await createUser({
      email: req.request.email.toLowerCase(),
      name: req.request.name,
      password: hashedPassword,
      photo: req.request.photo,
      verified: false,
      provider: 'local',
    });

    const verification_code = crypto.randomBytes(20).toString('hex');
    const hashed_verification_code = crypto
      .createHash('sha256')
      .update(verification_code)
      .digest('hex');
    await updateUser(
      { id: user.id },
      { verification_code: hashed_verification_code }
    );
    const redirectUrl = `https://localhost:3000/api/verifyemail?code=${verification_code}`;
    try {
      await new Email(user, redirectUrl).sendVerificationCode();
      res(null, { status: 'success', message: 'Email verification code sent' });
    } catch (error: any) {
      await updateUser({ id: user.id }, { verification_code: null });
      res({
        code: grpc.status.INTERNAL,
        message: error.message,
      });
    }
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Email already exists',
      });
    }
    res({ code: grpc.status.INTERNAL, message: err.message });
  }
};

export const loginHandler = async (
  req: grpc.ServerUnaryCall<
    SignInUserInput__Output,
    SignInUserResponse__Output
  >,
  res: grpc.sendUnaryData<SignInUserResponse__Output>
) => {
  try {
    // Get the user from the collection
    const user = await findUser({ email: req.request.email });

    if (!user?.verified) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Account not verified',
      });
    }

    // Check if user exist and password is correct
    if (!user || !(await bcrypt.compare(req.request.password, user.password))) {
      res({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Invalid email or password',
      });
    }

    // Create the Access and refresh Tokens
    const { access_token, refresh_token } = await signTokens(user);

    // Send Access Token
    res(null, {
      status: 'success',
      access_token,
      refresh_token,
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const refreshAccessTokenHandler = async (
  req: grpc.ServerUnaryCall<RefreshTokenInput__Output, RefreshTokenResponse>,
  res: grpc.sendUnaryData<RefreshTokenResponse>
) => {
  try {
    // Get the refresh token from cookie
    const refresh_token = req.request.refresh_token as string;

    const message = 'Could not refresh access token';
    if (!refresh_token) {
      res({
        code: grpc.status.PERMISSION_DENIED,
        message,
      });
    }

    // Validate the Refresh token
    const decoded = verifyJwt<{ sub: string }>(
      refresh_token,
      'refreshTokenPublicKey'
    );

    if (!decoded) {
      res({
        code: grpc.status.PERMISSION_DENIED,
        message,
      });
      return;
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded?.sub);
    if (!session) {
      res({
        code: grpc.status.PERMISSION_DENIED,
        message,
      });
      return;
    }

    // Check if the user exist
    const user = await findUniqueUser({ id: JSON.parse(session).id });

    if (!user) {
      res({
        code: grpc.status.PERMISSION_DENIED,
        message,
      });
    }

    // Sign new access token
    const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
      expiresIn: `${customConfig.accessTokenExpiresIn}m`,
    });

    // Send response
    res(null, { access_token, refresh_token });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const verifyEmailHandler = async (
  req: grpc.ServerUnaryCall<VerifyEmailInput__Output, GenericResponse>,
  res: grpc.sendUnaryData<GenericResponse>
) => {
  try {
    const verification_code = crypto
      .createHash('sha256')
      .update(req.request.verification_code)
      .digest('hex');

    const user = await findUniqueUser({ verification_code });

    if (!user) {
      res({
        code: grpc.status.UNAUTHENTICATED,
        message: 'Could not verify email',
      });
    }

    await updateUser(
      { id: user.id },
      { verified: true, verification_code: null }
    );

    res(null, { status: 'success', message: 'Email verified successfully' });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};
