import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../pb/services';
import {PostServiceHandlers} from "../pb/PostService"
import customConfig from './config/default';
import connectDB from './utils/prisma';
import { createPostHandler, deletePostHandler, findAllPostsHandler, findPostHandler, UpdatePostHandler } from './controllers/post.controller';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const PORT = customConfig.port;
const PROTO_FILE = '../proto/services.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

const server = new grpc.Server();

// Post Services
server.addService(proto.PostService.service, {
  CreatePost: (req, res)=> createPostHandler(req,res),
  UpdatePost: (req,res)=> UpdatePostHandler(req,res),
  DeletePost: (req,res)=> deletePostHandler(req,res),
  GetPost: (req, res)=> findPostHandler(req,res),
  GetPosts: (call)=> findAllPostsHandler(call)
  
} as PostServiceHandlers)
server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    connectDB();
    console.log(`🚀 Server listening on ${port}`);
  }
);
