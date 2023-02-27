const { readFileSync } = require("fs");

const [T, ...tc] = readFileSync("/dev/stdin").toString().trim().split("\n");

for(let i = 0; i < +T; i++) {
    fibonacci(+tc[i]);
}

function fibonacci(n) {
    const dp = [0, 1];
    
    if(n == 0) {
        console.log("1 0");
    } else if(n == 1) {
        console.log("0 1");
    } else {
        for(let i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        // 0이 출력되는 횟수는 fibo(n - 1)과 동일
        // 1이 출력되는 횟수는 fibo(n)과 동일
        console.log(`${dp[n - 1]} ${dp[n]}`);
    }
}

