const { readFileSync } = require("fs");

const [first, second] = readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = first.split(" ").map(Number);

const woods = second.split(" ").map(Number);

// 가장 긴 길이
let end = Math.max(...woods);
// 중간점
let mid = 0;
// 가장 짧은 길이
let start = 1;
while(start <= end) {
    mid = Math.floor((start + end) / 2);
    
    let len = 0;
    for(let i = 0; i < N; i++) {
        if(woods[i] > mid) {
            len += woods[i] - mid;
        }
    }
    
    if(len >= M) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }
}

console.log(end);