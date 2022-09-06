import { z } from 'zod';

export const createPostSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    content: z.string({
      required_error: 'Content is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    published: z.boolean({
      required_error: 'Published is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),
  }),
});

const params = {
  params: z.object({
    postId: z.string(),
  }),
};

export const getPostSchema = z.object({
  ...params,
});

export const updatePostSchema = z.object({
  ...params,
  body: z
    .object({
      title: z.string(),
      content: z.string(),
      category: z.string(),
      published: z.boolean(),
      image: z.string(),
    })
    .partial(),
});

export const deletePostSchema = z.object({
  ...params,
});

export type CreatePostInput = z.TypeOf<typeof createPostSchema>['body'];
export type GetPostInput = z.TypeOf<typeof getPostSchema>['params'];
export type UpdatePostInput = z.TypeOf<typeof updatePostSchema>;
export type DeletePostInput = z.TypeOf<typeof deletePostSchema>['params'];
