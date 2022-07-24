import { User } from '@prisma/client';
import { findUniqueUser } from '../services/user.service';
import redisClient from '../utils/connectRedis';
import { verifyJwt } from '../utils/jwt';

export const deserializeUser = async (
  access_token: string
): Promise<User | null> => {
  try {
    // Get the token
    if (!access_token) {
      return null;
    }

    // Validate Access Token
    const decoded = verifyJwt<{ sub: string }>(
      access_token,
      'accessTokenPublicKey'
    );

    if (!decoded) {
      return null;
    }

    // Check if user has a valid session
    const session = await redisClient.get(decoded.sub);

    if (!session) {
      return null;
    }

    // Check if user still exist
    const user = await findUniqueUser({ id: JSON.parse(session).id });

    if (!user) {
      return null;
    }

    return user;
  } catch (err: any) {
    return null;
  }
};
