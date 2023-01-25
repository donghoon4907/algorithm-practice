const fs = require("fs");

const [n, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(combination(n, m));

function combination(n, r) {
    let top = BigInt(1);
    let bottom = BigInt(1);
    
    for(let i = 0; i < r; i++) {
        top *= BigInt(n - i);
        bottom *= BigInt(r - i);
    }
    
    return (top / bottom).toString();
}