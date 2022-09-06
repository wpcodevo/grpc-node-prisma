import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostServiceClient as _PostServiceClient, PostServiceDefinition as _PostServiceDefinition } from './PostService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  DeletePostResponse: MessageTypeDefinition
  GetPostsRequest: MessageTypeDefinition
  Post: MessageTypeDefinition
  PostRequest: MessageTypeDefinition
  PostResponse: MessageTypeDefinition
  PostService: SubtypeConstructor<typeof grpc.Client, _PostServiceClient> & { service: _PostServiceDefinition }
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

