// Original file: proto/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePostRequest as _post_CreatePostRequest, CreatePostRequest__Output as _post_CreatePostRequest__Output } from './post/CreatePostRequest';
import type { DeletePostResponse as _DeletePostResponse, DeletePostResponse__Output as _DeletePostResponse__Output } from './DeletePostResponse';
import type { GetPostsRequest as _GetPostsRequest, GetPostsRequest__Output as _GetPostsRequest__Output } from './GetPostsRequest';
import type { Post as _Post, Post__Output as _Post__Output } from './Post';
import type { PostRequest as _PostRequest, PostRequest__Output as _PostRequest__Output } from './PostRequest';
import type { PostResponse as _PostResponse, PostResponse__Output as _PostResponse__Output } from './PostResponse';
import type { UpdatePostRequest as _post_UpdatePostRequest, UpdatePostRequest__Output as _post_UpdatePostRequest__Output } from './post/UpdatePostRequest';

export interface PostServiceClient extends grpc.Client {
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _post_CreatePostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  
  DeletePost(argument: _PostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _PostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _PostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  DeletePost(argument: _PostRequest, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _PostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _PostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _PostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  deletePost(argument: _PostRequest, callback: grpc.requestCallback<_DeletePostResponse__Output>): grpc.ClientUnaryCall;
  
  GetPost(argument: _PostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _PostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _PostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _PostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _PostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _PostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _PostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _PostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  
  GetPosts(argument: _GetPostsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_Post__Output>;
  GetPosts(argument: _GetPostsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_Post__Output>;
  getPosts(argument: _GetPostsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_Post__Output>;
  getPosts(argument: _GetPostsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_Post__Output>;
  
  UpdatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  UpdatePost(argument: _post_UpdatePostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  updatePost(argument: _post_UpdatePostRequest, callback: grpc.requestCallback<_PostResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface PostServiceHandlers extends grpc.UntypedServiceImplementation {
  CreatePost: grpc.handleUnaryCall<_post_CreatePostRequest__Output, _PostResponse>;
  
  DeletePost: grpc.handleUnaryCall<_PostRequest__Output, _DeletePostResponse>;
  
  GetPost: grpc.handleUnaryCall<_PostRequest__Output, _PostResponse>;
  
  GetPosts: grpc.handleServerStreamingCall<_GetPostsRequest__Output, _Post>;
  
  UpdatePost: grpc.handleUnaryCall<_post_UpdatePostRequest__Output, _PostResponse>;
  
}

export interface PostServiceDefinition extends grpc.ServiceDefinition {
  CreatePost: MethodDefinition<_post_CreatePostRequest, _PostResponse, _post_CreatePostRequest__Output, _PostResponse__Output>
  DeletePost: MethodDefinition<_PostRequest, _DeletePostResponse, _PostRequest__Output, _DeletePostResponse__Output>
  GetPost: MethodDefinition<_PostRequest, _PostResponse, _PostRequest__Output, _PostResponse__Output>
  GetPosts: MethodDefinition<_GetPostsRequest, _Post, _GetPostsRequest__Output, _Post__Output>
  UpdatePost: MethodDefinition<_post_UpdatePostRequest, _PostResponse, _post_UpdatePostRequest__Output, _PostResponse__Output>
}
