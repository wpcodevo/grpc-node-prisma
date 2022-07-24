// Original file: proto/user.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface User {
  'id'?: (string);
  'name'?: (string);
  'email'?: (string);
  'role'?: (string);
  'photo'?: (string);
  'provider'?: (string);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface User__Output {
  'id': (string);
  'name': (string);
  'email': (string);
  'role': (string);
  'photo': (string);
  'provider': (string);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
