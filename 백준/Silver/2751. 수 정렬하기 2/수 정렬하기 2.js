const { readFileSync } = require("fs");

const [N, ...nums] = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = nums.sort((a, b) => +a - +b);

console.log(answer.join("\n"));