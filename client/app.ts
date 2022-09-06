import * as grpc from '@grpc/grpc-js';
import customConfig from '../server/config/default';
import { proto } from "./client";
import express, { Request, Response } from "express"
import morgan from 'morgan';
import validate from './middleware/validate';
import { CreatePostInput, createPostSchema, DeletePostInput, GetPostInput, UpdatePostInput, updatePostSchema } from './schema/post.schema';
import { Post } from '@prisma/client';

const client = new proto.PostService(
  `0.0.0.0:${customConfig.port}`,
  grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 1);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  console.log("🚀 gRPC Client is ready")
}

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.post("/api/posts", validate(createPostSchema), async (req: Request<{},{},CreatePostInput>, res: Response)=>{
const {title,image,category,content,published} = req.body
  client.CreatePost(
    {
      title,
      content,
      category,
      image,
      published
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: err.message
        })
      }
      return res.status(201).json({
          status: "success",
          post: data?.post
        })
    }
  );
})

app.patch("/api/posts/:postId", validate(updatePostSchema), async (req: Request<UpdatePostInput['params'],{},UpdatePostInput['body']>, res: Response)=>{
const {title,image,category,content,published} = req.body
  client.UpdatePost(
    {
      id: req.params.postId,
      title,
      content,
      category,
      image,
      published
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: err.message
        })
      }
      return res.status(200).json({
          status: "success",
          post: data?.post
        })
    }
  );
})

app.get("/api/posts/:postId", async (req: Request<GetPostInput>, res: Response)=>{
  client.GetPost(
    {
      id: req.params.postId,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: err.message
        })
      }
      return res.status(200).json({
          status: "success",
          post: data?.post
        })
    }
  );
})

app.delete("/api/posts/:postId", async (req: Request<DeletePostInput>, res: Response)=>{
  client.DeletePost(
    {
      id: req.params.postId,
    },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          status: "fail",
          message: err.message
        })
      }
      return res.status(204).json({
          status: "success",
          data: null
        })
    }
  );
})

app.get("/api/posts", async (req: Request, res: Response)=>{
  const limit = parseInt(req.query.limit as string) || 10
  const page = parseInt(req.query.page as string) || 1
  const posts: Post[] = []

  const stream = client.GetPosts({page, limit})
  stream.on("data", (data: Post)=> {
    posts.push(data)
  })

  stream.on("end", ()=> {
    console.log("🙌 Communication ended")
    res.status(200).json({
          status: "success",
          results: posts.length,
          posts
          
        })
  })

  stream.on("error", (err)=> {
    res.status(500).json({
          status: "error",
          message: err.message
        })
  })
})

const port = 8080
app.listen(port, ()=>{
  console.log("🚀 Express client started successfully on port: "+ port)
})