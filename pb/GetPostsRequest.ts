// Original file: proto/services.proto

import type { Long } from '@grpc/proto-loader';

export interface GetPostsRequest {
  'page'?: (number | string | Long);
  'limit'?: (number | string | Long);
}

export interface GetPostsRequest__Output {
  'page': (string);
  'limit': (string);
}
