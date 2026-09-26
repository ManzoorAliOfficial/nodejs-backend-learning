# Building HTTP Server in Node.js

## What is HTTP Server?

An HTTP Server receives requests from clients and sends responses back to them.

## Creating HTTP Server

Node.js provides the built-in `http` module to create an HTTP server.

```js
const http = require("http");

const server = http.createServer((req, resp) => {
    resp.end("Hello from Server");
});

server.listen(8000, () => {
    console.log("Server Started...");
});