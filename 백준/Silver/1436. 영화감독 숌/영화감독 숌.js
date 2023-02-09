const { readFileSync } = require("fs");

const N = readFileSync("/dev/stdin").toString().trim();

let count = 0;
let answer = 0;
while(count < N) {
    answer++;
    
    if(answer.toString().includes("666")) {
        count++;
    }
}

console.log(answer);