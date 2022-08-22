import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthServiceClient as _AuthServiceClient, AuthServiceDefinition as _AuthServiceDefinition } from './AuthService';
import type { PostServiceClient as _PostServiceClient, PostServiceDefinition as _PostServiceDefinition } from './PostService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  AuthService: SubtypeConstructor<typeof grpc.Client, _AuthServiceClient> & { service: _AuthServiceDefinition }
  DeletePostResponse: MessageTypeDefinition
  GetMeInput: MessageTypeDefinition
  GetPostsRequest: MessageTypeDefinition
  Post: MessageTypeDefinition
  PostRequest: MessageTypeDefinition
  PostResponse: MessageTypeDefinition
  PostService: SubtypeConstructor<typeof grpc.Client, _PostServiceClient> & { service: _PostServiceDefinition }
  RefreshTokenInput: MessageTypeDefinition
  RefreshTokenResponse: MessageTypeDefinition
  VerifyEmailInput: MessageTypeDefinition
  auth: {
    GenericResponse: MessageTypeDefinition
    SignInUserInput: MessageTypeDefinition
    SignInUserResponse: MessageTypeDefinition
    SignUpUserInput: MessageTypeDefinition
    SignUpUserResponse: MessageTypeDefinition
    User: MessageTypeDefinition
    UserResponse: MessageTypeDefinition
  }
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  post: {
    CreatePostRequest: MessageTypeDefinition
    UpdatePostRequest: MessageTypeDefinition
  }
}

