// app.js
const calc = require('./calculator');   // custom module import
const os = require('os');               // core module import

console.log("\n=== Calculator Program ===");


console.log("Addition:", calc.add(10, 5))
;
console.log("Subtraction:", calc.Subtraction(10, 5));

console.log("Multiplication:", calc.multiply(10, 5));

console.log("Division:", calc.divide(10, 5));

console.log("Division by zero:", calc.divide(10, 0));



console.log("\n === System Info (Core Module) ===");


console.log("\n Platform:", os.platform());

console.log("\n Free Memory:", os.freemem());