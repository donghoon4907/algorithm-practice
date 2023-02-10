const { readFileSync } = require("fs");

const [N, ...nums] = readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = ["+"];

const stack = [1];

let lastNum = 1;
let cursor = 0;
while(cursor < +N) {
    const target = nums[cursor];
    
    const top = stack[stack.length - 1];
        
    if(top == target) {
        let t = stack.pop();
        answer.push("-");
        cursor++;
    } else {
        lastNum++;
        stack.push(lastNum);
        answer.push("+");
    }
    
    if(lastNum > +N) {
        answer = ["NO"];
        break;
    }
}

console.log(answer.join("\n"));