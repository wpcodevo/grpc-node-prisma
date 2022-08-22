// Original file: proto/services.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GenericResponse as _auth_GenericResponse, GenericResponse__Output as _auth_GenericResponse__Output } from './auth/GenericResponse';
import type { GetMeInput as _GetMeInput, GetMeInput__Output as _GetMeInput__Output } from './GetMeInput';
import type { RefreshTokenInput as _RefreshTokenInput, RefreshTokenInput__Output as _RefreshTokenInput__Output } from './RefreshTokenInput';
import type { RefreshTokenResponse as _RefreshTokenResponse, RefreshTokenResponse__Output as _RefreshTokenResponse__Output } from './RefreshTokenResponse';
import type { SignInUserInput as _auth_SignInUserInput, SignInUserInput__Output as _auth_SignInUserInput__Output } from './auth/SignInUserInput';
import type { SignInUserResponse as _auth_SignInUserResponse, SignInUserResponse__Output as _auth_SignInUserResponse__Output } from './auth/SignInUserResponse';
import type { SignUpUserInput as _auth_SignUpUserInput, SignUpUserInput__Output as _auth_SignUpUserInput__Output } from './auth/SignUpUserInput';
import type { UserResponse as _auth_UserResponse, UserResponse__Output as _auth_UserResponse__Output } from './auth/UserResponse';
import type { VerifyEmailInput as _VerifyEmailInput, VerifyEmailInput__Output as _VerifyEmailInput__Output } from './VerifyEmailInput';

export interface AuthServiceClient extends grpc.Client {
  GetMe(argument: _GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  GetMe(argument: _GetMeInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _GetMeInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _GetMeInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _GetMeInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  getMe(argument: _GetMeInput, callback: grpc.requestCallback<_auth_UserResponse__Output>): grpc.ClientUnaryCall;
  
  RefreshToken(argument: _RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  RefreshToken(argument: _RefreshTokenInput, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _RefreshTokenInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _RefreshTokenInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _RefreshTokenInput, options: grpc.CallOptions, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  refreshToken(argument: _RefreshTokenInput, callback: grpc.requestCallback<_RefreshTokenResponse__Output>): grpc.ClientUnaryCall;
  
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  SignInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  signInUser(argument: _auth_SignInUserInput, callback: grpc.requestCallback<_auth_SignInUserResponse__Output>): grpc.ClientUnaryCall;
  
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  SignUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  signUpUser(argument: _auth_SignUpUserInput, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  
  VerifyEmail(argument: _VerifyEmailInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _VerifyEmailInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _VerifyEmailInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmail(argument: _VerifyEmailInput, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _VerifyEmailInput, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _VerifyEmailInput, metadata: grpc.Metadata, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _VerifyEmailInput, options: grpc.CallOptions, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  verifyEmail(argument: _VerifyEmailInput, callback: grpc.requestCallback<_auth_GenericResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthServiceHandlers extends grpc.UntypedServiceImplementation {
  GetMe: grpc.handleUnaryCall<_GetMeInput__Output, _auth_UserResponse>;
  
  RefreshToken: grpc.handleUnaryCall<_RefreshTokenInput__Output, _RefreshTokenResponse>;
  
  SignInUser: grpc.handleUnaryCall<_auth_SignInUserInput__Output, _auth_SignInUserResponse>;
  
  SignUpUser: grpc.handleUnaryCall<_auth_SignUpUserInput__Output, _auth_GenericResponse>;
  
  VerifyEmail: grpc.handleUnaryCall<_VerifyEmailInput__Output, _auth_GenericResponse>;
  
}

export interface AuthServiceDefinition extends grpc.ServiceDefinition {
  GetMe: MethodDefinition<_GetMeInput, _auth_UserResponse, _GetMeInput__Output, _auth_UserResponse__Output>
  RefreshToken: MethodDefinition<_RefreshTokenInput, _RefreshTokenResponse, _RefreshTokenInput__Output, _RefreshTokenResponse__Output>
  SignInUser: MethodDefinition<_auth_SignInUserInput, _auth_SignInUserResponse, _auth_SignInUserInput__Output, _auth_SignInUserResponse__Output>
  SignUpUser: MethodDefinition<_auth_SignUpUserInput, _auth_GenericResponse, _auth_SignUpUserInput__Output, _auth_GenericResponse__Output>
  VerifyEmail: MethodDefinition<_VerifyEmailInput, _auth_GenericResponse, _VerifyEmailInput__Output, _auth_GenericResponse__Output>
}
