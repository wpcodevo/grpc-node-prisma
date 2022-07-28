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
// (...) code above

// [...] Register new user
function onClientReady() {
  getAuthenticatedUser();
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

function signInUser() {
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

function refreshToken() {
  client.RefreshToken(
    {
      refresh_token: '',
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

function getAuthenticatedUser() {
  client.getMe(
    {
      access_token:
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNGI3Mjc0ZC0xNjE2LTRhMGYtYjEyZS03ODEyMTlmMDkxNWIiLCJpYXQiOjE2NTg4NjIxMTMsImV4cCI6MTY1ODg2MzAxM30.KI00SRt4PfHuQ9CZwbnPE2Q-nIwQyb5tuZOrgUkbPC8ln3_EuuRN_AWfNKviNVLMuy02LxR_biG8JlmbnAEXpA',
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
