const { readFileSync } = require("fs");

const [N, ...nums] = readFileSync("/dev/stdin").toString().trim().split("\n");

const ascendArr = nums.sort((a, b) => +a - +b);

let sum;
let mean;
let median = ascendArr[parseInt(+N / 2, 10)];
let mode;
let range = +ascendArr[+N - 1] - +ascendArr[0];
let m = new Map();
let max = 0;

sum = ascendArr.reduce((acc, cur) => {
    m.set(cur, (m.get(cur) || 0) + 1);
    
    return acc + +cur;
}, 0);

mean = Math.round(sum / +N);

if(Math.abs(mean) == 0) {
    mean = 0;
}

m = [...m].sort((a,b)=> a[1] - b[1]);

if(+N == 1) {
    mode = m[m.length - 1][0];
} else {
    max = m[m.length - 1][1];

    m = m.filter(v => v[1] == max);
    
    if(m.length == 1) {
        mode = m[0][0];
    } else {
        mode = m[1][0];
    }
    
}

console.log(mean);
console.log(median);
console.log(mode);
console.log(range);