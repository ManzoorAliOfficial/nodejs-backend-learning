# What is REST API?

## 📚 Topic

**REST API**

REST API is a way for the **frontend and backend to communicate with each other**.

In simple words:

> **REST API helps applications send and receive data over the internet.**

## 🔄 How REST API Works

A simple REST API flow looks like this:

```text
Frontend
   ↓
REST API
   ↓
Backend
   ↓
Database
```

The frontend sends a request to the backend.

The backend processes the request and sends a response back.

## 🌐 HTTP Methods

REST APIs use HTTP methods for different operations.

| Method | Purpose             |
| ------ | ------------------- |
| GET    | Get data            |
| POST   | Create new data     |
| PUT    | Update data         |
| PATCH  | Update part of data |
| DELETE | Delete data         |

### GET

Used to get data.

```text
GET /products
```

This can return a list of products.

### POST

Used to create new data.

```text
POST /products
```

This can create a new product.

### PUT

Used to update existing data.

```text
PUT /products/1
```

This can update product with ID `1`.

### PATCH

Used to update part of existing data.

```text
PATCH /products/1
```

### DELETE

Used to delete data.

```text
DELETE /products/1
```

## 📦 JSON Response

REST APIs commonly send data in JSON format.

Example:

```json
{
  "id": 1,
  "name": "Fast Charger",
  "price": 2500
}
```

## 🛣️ API Routes

Examples of REST API routes:

```text
/products
/users
/orders
/categories
```

For a specific item:

```text
/products/1
/users/10
/orders/25
```

## 🛒 Real-World Example

For an e-commerce website:

```text
Frontend
   ↓
GET /api/products
   ↓
Express.js Backend
   ↓
Database
   ↓
Products Data
   ↓
Frontend
```

The frontend receives the products and displays them to the user.

## 🔥 CRUD

REST APIs are commonly used for CRUD operations.

```text
C → Create
R → Read
U → Update
D → Delete
```

These operations are usually connected with HTTP methods:

```text
POST   → Create
GET    → Read
PUT    → Update
PATCH  → Update
DELETE → Delete
```

## 🧠 Key Point

> **REST API is a way for frontend and backend applications to communicate using HTTP methods and data.**
