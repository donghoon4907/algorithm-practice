const { readFileSync } = require("fs");

const inputs = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

outer: for(let i = 0; i < inputs.length; i++) {
    if(inputs[i] == 0) {
        break outer;
    }
    
    const numArr = inputs[i].split("");
    inner: for(let j = 0; j < numArr.length / 2; j++) {
        const left = numArr[j];
        const right = numArr[numArr.length - j - 1];
        
        if(left != right) {
            answer.push("no");
            
            continue outer;
        }
    }
    
    answer.push("yes");
}

console.log(answer.join("\n"));