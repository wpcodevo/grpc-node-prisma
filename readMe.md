# Build Node.js gRPC API Server and Client: Send HTML Emails

This article will teach you how to build a Node.js gRPC API server to register a user and verify their email address using Nodemailer, Pug template engine, Prisma, PostgreSQL, Redis, and Docker-compose.

![Build Node.js gRPC API Server and Client: Send HTML Emails](https://codevoweb.com/wp-content/uploads/2022/07/Build-Node.js-gRPC-API-Server-and-Client-Send-HTML-Emails.webp)

## Topics Covered

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

Articles in this Series:

### 1. Build a Node.js gRPC Server and Client: Register and Login User

[Build a Node.js gRPC Server and Client: Register and Login User](https://codevoweb.com/build-nodejs-grpc-server-and-client-register-and-login-user)

### 2. Build Node.js gRPC API Server and Client: Send HTML Emails

[Build Node.js gRPC API Server and Client: Send HTML Emails](https://codevoweb.com/nodejs-grpc-api-server-and-client-send-html-emails)

### 3. Build a Complete CRUD gRPC API with Node.js and Express

[Build a Complete CRUD gRPC API with Node.js and Express](https://codevoweb.com/complete-grpc-crud-api-with-nodejs-and-express)
