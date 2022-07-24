import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _userPackage_AuthServiceClient, AuthServiceDefinition as _userPackage_AuthServiceDefinition } from './userPackage/AuthService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  userPackage: {
    AuthService: SubtypeConstructor<typeof grpc.Client, _userPackage_AuthServiceClient> & { service: _userPackage_AuthServiceDefinition }
    GenericResponse: MessageTypeDefinition
    GetMeInput: MessageTypeDefinition
    RefreshTokenInput: MessageTypeDefinition
    RefreshTokenResponse: MessageTypeDefinition
    SignInUserInput: MessageTypeDefinition
    SignInUserResponse: MessageTypeDefinition
    SignUpUserInput: MessageTypeDefinition
    SignUpUserResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
}

