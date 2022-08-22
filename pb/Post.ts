// Original file: proto/post.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from './google/protobuf/Timestamp';

export interface Post {
  'id'?: (string);
  'title'?: (string);
  'content'?: (string);
  'image'?: (string);
  'published'?: (boolean);
  'user'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Post__Output {
  'id': (string);
  'title': (string);
  'content': (string);
  'image': (string);
  'published': (boolean);
  'user': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
