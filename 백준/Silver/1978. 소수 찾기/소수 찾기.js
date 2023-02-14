const { readFileSync } = require("fs");

const [N, nums] = readFileSync("/dev/stdin").toString().trim().split("\n");

const T = nums.split(" ");

let answer = 0;

for(let i = 0; i < +N; i++) {
    const target = +T[i];
    
    if(isPrime(target)) {
        answer++;
    }
}

console.log(answer);

function isPrime(num) {
    if(num == 1) {
        return false;
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
            return false;
        }
    }
    
    return true;
}