const { readFileSync } = require("fs");

const [T, ...tc] = readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];

const answer = [];

outer: for(let i = 0; i < +T; i++) {
    const stack = [];
    const tcToArr = tc[i].split("");
    
    inner: for(let j = 0; j < tcToArr.length; j++) {
        let str = tcToArr[j];
        
        if(stack.length == 0 || str == "(") {
            stack.push(str);
            continue;
        }
        
        if(stack[stack.length - 1] == "(" && str == ")") {
            stack.pop();
            continue inner;
        } else {
            break inner;
        }
    }
    
    if(stack.length == 0) {
        answer.push("YES");
    } else {
        answer.push("NO");
    }
}

console.log(answer.join("\n"));