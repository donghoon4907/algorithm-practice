const { readFileSync } = require("fs");

const inputs = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

for(let i = 0; i < inputs.length; i++) {
    const tc = inputs[i].split(" ");
    
    if(tc[0] == 0 && tc[1] == 0 && tc[2] == 0) {
        break;
    }
    
    const [a, b, c] = tc.map(Number).sort((a, b) => a - b)
    
    if(Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) {
        answer.push("right");
    } else {
        answer.push("wrong");
    }
}

console.log(answer.join("\n"));