# Build a Node.js gRPC Server and Client: Register and Login User

This article will teach you how to create a Node.js gRPC server and client to authenticate a user with JSON Web Tokens using TypeScript, Node.js, PostgreSQL, Redis, Prisma, and Docker-compose.

![Build a Node.js gRPC Server and Client: Register and Login User](https://codevoweb.com/wp-content/uploads/2022/07/Build-a-Node.js-gRPC-Server-and-Client-Register-and-Login-User.webp)

## Topics Covered

- Setting up PostgreSQL and Redis Servers
- Creating the gRPC Protocol Buffer Messages
    - Define the gRPC User Protocol Buffer Message
    - Define the gRPC Protocol Buffer Message to SignUp User
    - Define the gRPC Protocol Buffer Message to Login User
- Creating the RPC Services and Methods
- Generating the gRPC Client and Server TypeScript Files
- Generate the JWT Private and Public Keys
- Utility Function to Sign and Verify JWTs
        - Function to Sign the Access and Refresh Tokens
        - Function to Verify the JWT Tokens
- Defining the Database Models with Prisma
- Database Migration with Prisma
- Connecting to the PostgreSQL and Redis Servers
- Creating the Prisma Services
- Creating the Authentication Controllers
        - Controller to Register a New User
        - Controller to Sign in the User
        - Controller to Refresh the Access Token
- Protecting Private RPC Methods
- Getting the Authenticated User
- Creating the gRPC Server in Node.js
- Creating the gRPC Client in Node.js
        - Starting the gRPC Client and Server
        - Calling the RPC method to Register a User
        - Calling the RPC method to Sign in the User
        - Calling the RPC to Get the Authenticated User

    
    
Read the entire article here: [https://codevoweb.com/build-nodejs-grpc-server-and-client-register-and-login-user](https://codevoweb.com/build-nodejs-grpc-server-and-client-register-and-login-user)

Articles in this Series:

### 1. Build a Node.js gRPC Server and Client: Register and Login User

[Build a Node.js gRPC Server and Client: Register and Login User](https://codevoweb.com/build-nodejs-grpc-server-and-client-register-and-login-user)

### 2. Build Node.js gRPC API Server and Client: Send HTML Emails

[Build Node.js gRPC API Server and Client: Send HTML Emails](https://codevoweb.com/nodejs-grpc-api-server-and-client-send-html-emails)

### 3. Build a Complete CRUD gRPC API with Node.js and Express

[Build a Complete CRUD gRPC API with Node.js and Express](https://codevoweb.com/complete-grpc-crud-api-with-nodejs-and-express)
