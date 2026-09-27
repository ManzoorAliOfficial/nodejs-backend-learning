const express = require("express");

const app = express();

app.get("/", (req, res) => {
    return res.end("Hello From Home Page");
});

app.get("/about", (req, res) => {
    return res.end(
        "Hello from About Page...!!" +
        "Hi" +
        req.query.name +
        "you are" +
        req.query.age
    );
});

app.listen(5000, () => {
    console.log("Server Started...!!");
});