const { readFileSync } = require("fs");

const [N, A, M, T] = readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = A.split(" ").sort((a, b) => +a - +b);

const tests = T.split(" ");

const answer = [];

for(let i = 0; i < tests.length; i++) {
    let start = 0;
    let end = +N - 1;
    let mid;
    let isFind = false;
    while(start <= end) {
        mid = parseInt(( start + end ) / 2);
        
        if(+tests[i] == +arr[mid]) {
            answer.push("1");
            isFind = true;
            break;
        } else {
            if(+tests[i] < +arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }
    
    if(!isFind) {
        answer.push("0");
    }
}

console.log(answer.join("\n"));