import * as grpc from '@grpc/grpc-js';
import customConfig from "../server/config/default";
import { proto } from "./app";

const client = new proto.AuthService(
  `0.0.0.0:${customConfig.port}`,
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
  verifyEmail("484aed90efbb9beff8dcd693d18c8ca7231c0527")
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

function signInUser({email, password}:{email: string, password: string}) {
  client.SignInUser(
    {
      email,
      password,
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