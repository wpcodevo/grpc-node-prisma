import * as grpc from '@grpc/grpc-js';
import { GetMeInput__Output } from '../../pb/userPackage/GetMeInput';
import { UserResponse } from '../../pb/userPackage/UserResponse';
import { deserializeUser } from '../middleware/deserializeUser';

export const getMeHandler = async (
  req: grpc.ServerUnaryCall<GetMeInput__Output, UserResponse>,
  res: grpc.sendUnaryData<UserResponse>
) => {
  try {
    const user = await deserializeUser(req.request.access_token);
    if (!user) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'Invalid access token or session expired',
      });
      return;
    }

    res(null, {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo!,
        provider: user.provider!,
        role: user.role!,
        created_at: {
          seconds: user.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: user.updated_at.getTime() / 1000,
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};
