const { readFileSync } = require("fs");

const input = readFileSync("/dev/stdin").toString().trim();

let N = +input;
let answer = 0;
while(true) {
    if(N % 5 == 0) {
        answer += N / 5
        break;
    }
    
    N -= 3;
    answer++;
    
    if(N < 0) {
        answer = -1;
        break;
    }
}

console.log(answer)
