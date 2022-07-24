// Original file: proto/auth_service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetMeInput as _userPackage_GetMeInput, GetMeInput__Output as _userPackage_GetMeInput__Output } from '../userPackage/GetMeInput';
import type { RefreshTokenInput as _userPackage_RefreshTokenInput, RefreshTokenInput__Output as _userPackage_RefreshTokenInput__Output } from '../userPackage/RefreshTokenInput';
import type { RefreshTokenResponse as _userPackage_RefreshTokenResponse, RefreshTokenResponse__Output as _userPackage_RefreshTokenResponse__Output } from '../userPackage/RefreshTokenResponse';
import type { SignInUserInput as _userPackage_SignInUserInput, SignInUserInput__Output as _userPackage_SignInUserInput__Output } from '../userPackage/SignInUserInput';
import type { SignInUserResponse as _userPackage_SignInUserResponse, SignInUserResponse__Output as _userPackage_SignInUserResponse__Output } from '../userPackage/SignInUserResponse';
import type { SignUpUserInput as _userPackage_SignUpUserInput, SignUpUserInput__Output as _userPackage_SignUpUserInput__Output } from '../userPackage/SignUpUserInput';
import type { SignUpUserResponse as _userPackage_SignUpUserResponse, SignUpUserResponse__Output as _userPackage_SignUpUserResponse__Output } from '../userPackage/SignUpUserResponse';
import type { UserResponse as _userPackage_UserResponse, UserResponse__Output as _userPackage_UserResponse__Output } from '../userPackage/UserResponse';

export interface AuthServiceClient extends grpc.Client {
  GetMe(argument: _userPackage_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _userPackage_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _userPackage_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _userPackage_GetMeInput, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _userPackage_GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _userPackage_GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _userPackage_GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _userPackage_GetMeInput, callback: grpc.requestCallback<_userPackage_UserResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _userPackage_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _userPackage_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _userPackage_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _userPackage_RefreshTokenInput, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _userPackage_RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _userPackage_RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _userPackage_RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _userPackage_RefreshTokenInput, callback: grpc.requestCallback<_userPackage_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  
  SignInUser(argument: _userPackage_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _userPackage_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _userPackage_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _userPackage_SignInUserInput, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _userPackage_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _userPackage_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _userPackage_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _userPackage_SignInUserInput, callback: grpc.requestCallback<_userPackage_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _userPackage_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _userPackage_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _userPackage_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _userPackage_SignUpUserInput, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _userPackage_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _userPackage_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _userPackage_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _userPackage_SignUpUserInput, callback: grpc.requestCallback<_userPackage_SignUpUserResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetMe: grpc.handleUnaryCall<_userPackage_GetMeInput__Output, _userPackage_UserResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_userPackage_RefreshTokenInput__Output, _userPackage_RefreshTokenResponse>;
  
  SignInUser: grpc.handleUnaryCall<_userPackage_SignInUserInput__Output, _userPackage_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_userPackage_SignUpUserInput__Output, _userPackage_SignUpUserResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetMe: MethodDefinition<_userPackage_GetMeInput, _userPackage_UserResponse, _userPackage_GetMeInput__Output, _userPackage_UserResponse__Output>
  RefreshToken: MethodDefinition<_userPackage_RefreshTokenInput, _userPackage_RefreshTokenResponse, _userPackage_RefreshTokenInput__Output, _userPackage_RefreshTokenResponse__Output>
  SignInUser: MethodDefinition<_userPackage_SignInUserInput, _userPackage_SignInUserResponse, _userPackage_SignInUserInput__Output, _userPackage_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_userPackage_SignUpUserInput, _userPackage_SignUpUserResponse, _userPackage_SignUpUserInput__Output, _userPackage_SignUpUserResponse__Output>
}
