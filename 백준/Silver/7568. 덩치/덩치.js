const { readFileSync } = require("fs");

const [N, ...sizes] = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = Array.from({ length: +N }, () => 1);

for(let i = 0; i < +N; i++) {
    const [x, y] = sizes[i].split(" ");
    for(let j = 0; j < +N; j++) {
        if(i == j) {
            continue;
        }
        
        const [p, q] = sizes[j].split(" ");
        
        if(+x < +p && +y < +q) {
            answer[i]++;
        }
    }
}

console.log(answer.join(" "));