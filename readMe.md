# Node.js gRPC Server and Client

## 1. Build a Node.js gRPC Server and Client: Register and Login User

This article will teach you how to create a Node.js gRPC server and client to authenticate a user with JSON Web Tokens using TypeScript, Node.js, PostgreSQL, Redis, Prisma, and Docker-compose.

![Build a Node.js gRPC Server and Client: Register and Login User](https://codevoweb.com/wp-content/uploads/2022/07/Build-a-Node.js-gRPC-Server-and-Client-Register-and-Login-User.webp)

### Topics Covered

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

## 2. Build Node.js gRPC API Server and Client: Send HTML Emails

This article will teach you how to build a Node.js gRPC API server to register a user and verify their email address using Nodemailer, Pug template engine, Prisma, PostgreSQL, Redis, and Docker-compose.

![Build Node.js gRPC API Server and Client: Send HTML Emails](https://codevoweb.com/wp-content/uploads/2022/07/Build-Node.js-gRPC-API-Server-and-Client-Send-HTML-Emails.webp)

### Topics Covered

- Send Emails with Node.js gRPC Server & Nodemailer
- Setup Pug Templating Engine and Nodemailer
- Creating the gRPC Protobuf Messages
    - Create the User Protobuf Message
    - Create the SignUp User Protobuf Message
    - Create the Sign-in User Protobuf Message
- Creating the gRPC Services and RPC Methods
- How to Generate the TypeScript gRPC Code
- Creating the Email Templates with Pug
- Create a Helper Class to the Send Emails
    - Retrieve the Nodemailer SMTP Credentials
    - Add the Email Class Attributes
    - Define the Nodemailer Transporter
    - Create a Method to Generate and Send the Email Templates
    - Create the Methods to Send the Emails
- Update the Register RPC Controller
- Update the Login Controller
- Create an RPC Controller to Verify the Code
- Add the RPC Controller to the gRPC Service
- Updating the Node.js gRPC Client
    - Calling the RPC Method to Create a User
    - Calling the RPC Method to Verify the Code    
    
Read the entire article here: [https://codevoweb.com/nodejs-grpc-api-server-and-client-send-html-emails](https://codevoweb.com/nodejs-grpc-api-server-and-client-send-html-emails)


## 3. Build a Complete CRUD gRPC API with Node.js and Express

In this guide, you will learn how to build a complete CRUD gRPC API server and client with TypeScript in a Node.js environment that runs on an Expressjs framework and uses a Prisma database ORM. We'll create five RPC services on the gRPC server that are going to be evoked by the gRPC client to perform the basic CRUD (Create, Read, Update, and Delete) operations.

![Build a Complete CRUD gRPC API with Node.js and Express](https://codevoweb.com/wp-content/uploads/2022/09/Build-a-Complete-CRUD-gRPC-API-with-Node.js-and-Express.webp)

### Topics Covered

- Node.js gRPC Server and Client Overview
    - Calling the Create Record RPC Service
    - Calling the Update Record RPC Service
    - Calling the Get Single Record RPC Service
    - Calling the Delete Record RPC Service
    - Calling the Get All Records RPC Service
- Setup and Installation
- Create the Protobuf Messages
- Create the gRPC Services
- Model the API Data with Prisma
- Create the RPC Handlers
    - Create a New Record RPC Handler
    - Update Record RPC Handler
    - Retrieve a Single Record RPC Handler
    - Delete a Record RPC Handler
    - Retrieve all Records RPC Handler
- Create the Node.js gRPC Server
- Create the gRPC Client with Node.js
    - Create the Validation Schema with Zod
    - Create a Middleware to Validate the Requests
    - Set up and Export the gRPC Client
    - Set up the Express Server
    
    
Read the entire article here: [https://codevoweb.com/complete-grpc-crud-api-with-nodejs-and-express](https://codevoweb.com/complete-grpc-crud-api-with-nodejs-and-express)

