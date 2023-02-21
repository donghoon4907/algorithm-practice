const { readFileSync } = require("fs");

const [A, B, V] = readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.ceil((V - B) / (A - B)));