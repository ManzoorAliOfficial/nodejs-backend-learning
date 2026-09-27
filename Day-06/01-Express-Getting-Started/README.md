# Getting Started with Express and Node.js

## 📚 Topic

Getting Started with Express and Node.js

Express.js is a lightweight web framework for Node.js that makes it easier to build web servers, routes, and APIs.

## 🔹 What is Express.js?

Express.js is a framework built on top of Node.js.

It simplifies tasks such as:

* Creating web servers
* Handling routes
* Handling HTTP requests
* Sending responses
* Building APIs

## 🔹 Installing Express

First, initialize a Node.js project:

```bash
npm init -y
```

Then install Express:

```bash
npm install express
```

## 🔹 Basic Express Server

Create an `app.js` file:

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express.js");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

## 🔹 Running the Server

Run the application using:

```bash
node app.js
```

Open the following URL in your browser:

```text
http://localhost:3000
```

Output:

```text
Hello from Express.js
```

## 🔹 Express Routing

Express makes it easy to create different routes:

```js
app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});
```

### Routes

```text
/          → Home Page
/about     → About Page
/contact   → Contact Page
```

## 🔹 Node.js vs Express.js

| Node.js                    | Express.js                              |
| -------------------------- | --------------------------------------- |
| JavaScript runtime         | Web framework                           |
| Provides the `http` module | Built on Node.js                        |
| More manual code           | Less code                               |
| Manual routing             | Easier routing                          |
| Can create servers         | Makes server and API development easier |

## 🎯 Learning Goals

* Understand Express.js
* Install Express
* Create an Express server
* Create routes
* Handle GET requests
* Send responses
* Understand the relationship between Node.js and Express.js

## 🛠️ Technologies

* Node.js
* Express.js
* JavaScript
* npm

## 🧠 Key Point

> Express.js makes it easier to build web servers and APIs with Node.js.
