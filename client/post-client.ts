import * as grpc from '@grpc/grpc-js';
import customConfig from '../server/config/default';
import { proto } from "./app";

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
  findAllPosts({page: 1, limit: 10})
  // createPost()
}

function createPost() {
  client.CreatePost(
    {
      Title: "How to create a blog with Wix",
      Content: "How to create a blog with Wix",
      Image: "default.png",
      User: "61ab4f17-891c-41bd-89de-8a2d98ee3a75",
      Published: true
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function updatePost() {
  client.UpdatePost(
    {
      Id: "99159ad4-635f-4e0d-a560-7f1aca7f9594",
      Title: "How to create a blog with Wix",
      Content: "How to create a blog with Wix",
      Image: "default.png",
      User: "61ab4f17-891c-41bd-89de-8a2d98ee3a75",
      Published: false
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function getPost(Id: string) {
  client.GetPost(
    {
      Id
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function deletePost(Id: string) {
  client.DeletePost(
    {
      Id
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    }
  );
}

function findAllPosts({page,limit}:{page: number; limit: number}){
  const stream = client.GetPosts({page, limit})
  stream.on("data", (chunk)=> {
    console.log(chunk)
  })

  stream.on("end", ()=> {
    console.log("🙌 Communication ended")
  })
}