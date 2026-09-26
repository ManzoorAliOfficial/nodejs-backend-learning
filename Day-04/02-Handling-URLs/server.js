const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {

    if (req.url === "/favicon.ico") {
        return;
    }

    const log = `${Date.now()}: ${req.url} New Request Received...!!\n`;

    const myUrl = new URL(req.url, `http://${req.headers.host}`);

    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log("Error:", err);
            resp.end("Internal Server Error");
            return;
        }

        switch (myUrl.pathname) {
            case "/":
                resp.end("HomePage");
                break;

            case "/about":
                resp.end("I'm Manzoor Full Stack Developer");
                break;

            case "/contactUs":
                resp.end("Email: manzooralidashti11@gmail.com");
                break;

            default:
                resp.end("404! Not Found Page");
        }
    });

    console.log("New Request is Received...!");
});

server.listen(8000, () => {
    console.log("Server Started...!!");
});