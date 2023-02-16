const { readFileSync } = require("fs");

const N = readFileSync("/dev/stdin").toString().trim();

let answer = 0;
let num = 0;
while(num != N) {
    if(f(num) == N) {
        answer = num;
        break;
    }
    
    num++;
}

console.log(answer);


function f(num) {
    return num + String(num).split("").reduce((acc, cur) => acc + +cur, 0);
}