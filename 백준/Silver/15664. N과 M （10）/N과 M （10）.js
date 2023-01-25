const fs = require("fs");

const [nm, strArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

const arr = strArr.split(" ").map(Number).sort((a, b) => a - b);

const result = new Set();

combination();

console.log(Array.from(result).join("\n"));

function combination(temp = [], index = 0) {
    if(temp.length === m) {
        const next = temp.join(" ");
        
        if(!result.has(next)) {
            result.add(next);
        }
    }
    
    for(let i = index; i < n; i++) {
        temp.push(arr[i]);
        
        combination(temp, i + 1);
        
        temp.pop();
        
    }
}