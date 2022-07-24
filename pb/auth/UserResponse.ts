// Original file: proto/user.proto

import type { User as _auth_User, User__Output as _auth_User__Output } from '../auth/User';

export interface UserResponse {
  'user'?: (_auth_User | null);
}

export interface UserResponse__Output {
  'user': (_auth_User__Output | null);
}
