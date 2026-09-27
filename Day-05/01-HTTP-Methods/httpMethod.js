const http = require("http");

const products = [
    {
        id: 1,
        name: "PowerBank",
        price: 3400
    },
    {
        id: 2,
        name: "Airbuds",
        price: 1899
    }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/products") {

        res.writeHead(200, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify(products));

    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("Route Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});