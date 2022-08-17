import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../pb/services';
import customConfig from '../server/config/default';

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

const client = new proto.auth.AuthService(
  `0.0.0.0:${PORT}`,
  grpc.credentials.createInsecure()
);
const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  verifyEmail('bd0eee08b61af0665eb2963991ade35e315abf50');
}

function signUpUser() {
  client.SignUpUser(
    {
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'password123',
      passwordConfirm: 'password123',
      photo: 'default.png',
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

function signInUser(email: string, password: string) {
  client.SignInUser(
    {
      email: 'admin@admin.com',
      password: 'password123',
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

function refreshToken(refresh_token: string) {
  client.RefreshToken(
    {
      refresh_token,
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

function getAuthenticatedUser(access_token: string) {
  client.getMe(
    {
      access_token,
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

function verifyEmail(verification_code: string) {
  client.verifyEmail({ verification_code }, (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(res);
  });
}
