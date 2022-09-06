import * as grpc from '@grpc/grpc-js';
import { DeletePostResponse } from '../../pb/DeletePostResponse';
import { GetPostsRequest__Output } from '../../pb/GetPostsRequest';
import { Post } from '../../pb/Post';
import { CreatePostRequest__Output } from '../../pb/post/CreatePostRequest';
import { UpdatePostRequest__Output } from '../../pb/post/UpdatePostRequest';
import { PostRequest__Output } from '../../pb/PostRequest';
import { PostResponse } from '../../pb/PostResponse';
import { createPost, deletePost, findAllPosts, findPost, findUniquePost, updatePost } from '../services/post.service';

export const createPostHandler = async (
  req: grpc.ServerUnaryCall<CreatePostRequest__Output, PostResponse>,
  res: grpc.sendUnaryData<PostResponse>
) => {
  try {
   const post = await createPost({
    title: req.request.title,
    content: req.request.content,
    image: req.request.image,
    category: req.request.category,
    published: true,
   })

   res(null, {
    post: {
      id: post.id,
      title: post.title,
      content: post.content,
      image: post.image,
      published: post.published,
      created_at: {
          seconds: post.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: post.updated_at.getTime() / 1000,
        },
    }
   })
  } catch (err: any) {
    if (err.code === 'P2002') {
      res({
        code: grpc.status.ALREADY_EXISTS,
        message: 'Post with that title already exists',
      });
    }
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const UpdatePostHandler = async (req: grpc.ServerUnaryCall<UpdatePostRequest__Output, PostResponse>, res: grpc.sendUnaryData<PostResponse>)=> {
try {
 const postExists =  await findPost({id: req.request.id})

  if (!postExists) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'No post with that ID exists',
      });
      return
    }
  const updatedPost = await updatePost({id: req.request.id},{
    title: req.request.title,
    content: req.request.content,
    category: req.request.category,
    image: req.request.image,
    published: req.request.published,
  })

  res(null, {
    post: {
      id: updatedPost.id,
      title: updatedPost.title,
      content: updatedPost.content,
      image: updatedPost.image,
      published: updatedPost.published,
      created_at: {
          seconds: updatedPost.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: updatedPost.updated_at.getTime() / 1000,
        },
    }
  })
} catch (err: any) {
  res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
}
}


export const findPostHandler = async (req: grpc.ServerUnaryCall<PostRequest__Output, PostResponse>, res: grpc.sendUnaryData<PostResponse>)=> {
try {
  const post = await findUniquePost({id: req.request.id})

  if (!post) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'No post with that ID exists',
      });
      return
    }

  res(null, {
    post: {
      id: post.id,
      title: post.title,
      content: post.content,
      image: post.image,
      published: post.published,
      created_at: {
          seconds: post.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: post.updated_at.getTime() / 1000,
        },
    }
  })
} catch (err: any) {
  res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
}
}

export const deletePostHandler = async (req: grpc.ServerUnaryCall<PostRequest__Output, DeletePostResponse>, res: grpc.sendUnaryData<DeletePostResponse>)=> {
try {
  const postExists =  await findPost({id: req.request.id})

  if (!postExists) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'No post with that ID exists',
      });
      return
    }
    
  const post = await deletePost({id: req.request.id})

  if (!post) {
      res({
        code: grpc.status.NOT_FOUND,
        message: 'No post with that ID exists',
      });
      return
    }

  res(null, {
    success: true
  })
} catch (err: any) {
  res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
}
}

export const findAllPostsHandler = async (call: grpc.ServerWritableStream<GetPostsRequest__Output, Post>)=>{
  try {
    const {page, limit} = call.request
    const posts = await findAllPosts({page: parseInt(page), limit: parseInt(limit)})

    for(let i= 0; i < posts.length; i++){
      const post = posts[i]
      call.write({
        id: post.id,
        title: post.title,
        content: post.content,
        category: post.category,
        image: post.image,
        published: post.published,
        created_at: {
          seconds: post.created_at.getTime() / 1000,
        },
        updated_at: {
          seconds: post.updated_at.getTime() / 1000,
        },

      })
    }
    call.end()
    
  } catch (error: any) {
    console.log(error)
  }
}
