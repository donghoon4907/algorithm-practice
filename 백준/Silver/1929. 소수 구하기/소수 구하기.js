const { readFileSync } = require("fs");

const [m, n] = readFileSync("/dev/stdin").toString().trim().split(" ");

const answer = [];

for(let i = +m; i <= +n; i++) {
    if(isPrime(i)) {
        answer.push(i);
    }
}

console.log(answer.join("\n"));

function isPrime(number) {
    if(number == 1) {
        return false;
    }
    // 소수 판별을 위해 2 ~ number의 제곱근 범위에서 약수가 존재하는지 확인
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i == 0) {
            return false;
        }
    }
    
    return true;
}