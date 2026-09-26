# Handling URLs in Node.js

## What is URL Handling?

URL handling means checking the URL requested by the client and sending the appropriate response from the server.

## Example URLs

```text
http://localhost:8000/
http://localhost:8000/about
http://localhost:8000/contactUs
```

## URL Object

Node.js provides the `URL` class to parse URLs.

```js
const myUrl = new URL(req.url, `http://${req.headers.host}`);
```

### `pathname`

`pathname` returns only the path part of the URL.

```js
console.log(myUrl.pathname);
```

Example:

```text
/about
```

### `search`

`search` returns the query string.

Example:

```text
http://localhost:8000/about?name=Manzoor
```

```js
console.log(myUrl.search);
```

Output:

```text
?name=Manzoor
```

## Handling Routes

We can use `switch` with `myUrl.pathname` to handle different URLs.

```js
switch (myUrl.pathname) {
    case "/":
        resp.end("HomePage");
        break;

    case "/about":
        resp.end("About Page");
        break;

    case "/contactUs":
        resp.end("Contact Page");
        break;

    default:
        resp.end("404! Not Found Page");
}
```

## Favicon Request

Browsers may automatically request `/favicon.ico`.

We can ignore it:

```js
if (req.url === "/favicon.ico") {
    return;
}
```

## Important Points

* `req.url` gives the requested URL.
* `new URL()` is used to parse the URL.
* `myUrl.pathname` gives the route/path.
* `myUrl.search` gives the query string.
* `resp.end()` sends the response to the client.
* `switch` can be used to handle different routes.

## Request Flow

```text
Client
   ↓
HTTP Request
   ↓
req.url
   ↓
URL Parsing
   ↓
myUrl.pathname
   ↓
Route Handling
   ↓
resp.end()
   ↓
HTTP Response
```

