# Day-05: HTTP Methods

## 📚 Topic

HTTP Methods in Node.js
HTTP Methods tell the server what operation the client wants to perform.

## 🔹 Main HTTP Methods

| Method | Purpose                      |
| ------ | ---------------------------- |
| GET    | Get data                     |
| POST   | Create new data              |
| PUT    | Update existing data         |
| PATCH  | Update part of existing data |
| DELETE | Delete data                  |

## 🔹 GET Method

The GET method is used to get data from the server.

Example:

```text
GET /products
```
Meaning:
> Give me the products data.
## 🔹 POST Method

The POST method is used to create new data on the server.
Example:
```text
POST /products
```
Request Body:

```json
{
    "id": 3,
    "name": "Smart Watch",
    "price": 3000
}
```
Meaning:
> Create a new product with this data.
## 🔹 Checking HTTP Methods in Node.js
```js
if (req.method === "GET") {
    res.end("GET Request");
}
else if (req.method === "POST") {
    res.end("POST Request");
}
```
## 🔹 Important Property
```js
req.method
```
`req.method` tells us which HTTP method the client used.

Possible values include:
```text
GET
POST
PUT
PATCH
DELETE
```
## 🧠 Easy Way to Remember
```text
GET     → Read data
POST    → Create data
PUT     → Update data
PATCH   → Partially update data
DELETE  → Delete data
```
## 🎯 Day-05 Learning Goals
* Understand HTTP Methods
* Handle GET requests
* Handle POST requests
* Understand request bodies
* Use `req.method`
* Understand basic API requests
## 🛠️ Technologies
* Node.js
* JavaScript
* HTTP Module
---

## Summary

HTTP Methods are used for communication between the client and server.
**GET = Read**
**POST = Create**
**PUT/PATCH = Update**
**DELETE = Delete**
