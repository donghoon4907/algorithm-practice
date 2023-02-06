const fs = require("fs");

const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(+A + +B);