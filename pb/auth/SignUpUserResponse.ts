// Original file: proto/rpc_signup_user.proto

import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface SignUpUserResponse {
  'user'?: (_auth_User | null);
}

export interface SignUpUserResponse__Output {
  'user': (_auth_User__Output | null);
}
