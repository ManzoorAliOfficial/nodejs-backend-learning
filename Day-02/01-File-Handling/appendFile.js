const fs = require("fs");

fs.appendFileSync("./appendFile.txt", `${Date.now()}Topic: File Handling\n ` );

console.log("Data appended successfully!");