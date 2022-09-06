// Original file: proto/rpc_update_post.proto


export interface UpdatePostRequest {
  'id'?: (string);
  'title'?: (string);
  'content'?: (string);
  'category'?: (string);
  'image'?: (string);
  'published'?: (boolean);
  '_title'?: "title";
  '_content'?: "content";
  '_category'?: "category";
  '_image'?: "image";
  '_published'?: "published";
}

export interface UpdatePostRequest__Output {
  'id': (string);
  'title'?: (string);
  'content'?: (string);
  'category'?: (string);
  'image'?: (string);
  'published'?: (boolean);
  '_title': "title";
  '_content': "content";
  '_category': "category";
  '_image': "image";
  '_published': "published";
}
