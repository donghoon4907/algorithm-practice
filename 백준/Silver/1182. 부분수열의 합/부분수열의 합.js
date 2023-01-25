const fs = require("fs");

const [ns, strIntegers] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, s] = ns.split(" ").map(Number);

const integers = strIntegers.split(" ").map(Number);

let count = 0;

combination();

console.log(count)

function combination(temp = [], index = 0) {
    const sumT = temp.reduce((acc, cur) => acc + cur, null);
    
    if(sumT !== null && sumT === s) {
        count++;
    }
    
    for(let i = index; i < n; i++) {
        temp.push(integers[i]);
        
        combination(temp, i + 1);
        
        temp.pop();
    }
}