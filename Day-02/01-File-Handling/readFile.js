const fs = require("fs");

// Synchronous
// const result = fs.readFileSync("./readContext.txt", "utf-8");
// console.log(result);


// Asynchronous
fs.readFile("./readContext.txt", "utf-8", (error, result) => {
    if (error) {
        console.log("Error!!!!!!!!!", error);
    } else {
        console.log(result);
    }
});