// Original file: proto/rpc_signup_user.proto


export interface SignUpUserInput {
  'name'?: (string);
  'email'?: (string);
  'password'?: (string);
  'passwordConfirm'?: (string);
  'photo'?: (string);
  'provider'?: (string);
}

export interface SignUpUserInput__Output {
  'name': (string);
  'email': (string);
  'password': (string);
  'passwordConfirm': (string);
  'photo': (string);
  'provider': (string);
}
