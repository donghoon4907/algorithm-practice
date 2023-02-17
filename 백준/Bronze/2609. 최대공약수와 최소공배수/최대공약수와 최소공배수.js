const { readFileSync } = require("fs");

const [n1, n2] = readFileSync("/dev/stdin").toString().trim().split(" ");

let gcd = f(+n1, +n2);
console.log(gcd);
console.log(+n1 * +n2 / gcd);

function f(m, n) {
    if(m < n) {
        [m, n] = [n, m];
    }
    
    if(n == 0) {
        return m;
    }
    
    if(m % n == 0) {
        return n
    } else {
        return f(n, m % n);
    }
}