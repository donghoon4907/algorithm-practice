const { readFileSync } = require("fs");

const [NM, ...edges] = readFileSync("/dev/stdin").toString().trim().split("\n");
// N: 학생의 수 M: 간선의 수
const [N, M] = NM.split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

const inDegree = Array.from({ length: N + 1 }).fill(0);

const queue = [];

const answer = [];

for(let i = 0; i < M; i++) {
    const [prev, next] = edges[i].split(" ");
    
    graph[+prev].push(+next);
    
    inDegree[+next] += 1;
}

for(let i = 1; i <= N; i++) {
    if(inDegree[i] == 0) {
        queue.push(i);
    }
}

while(queue.length > 0) {
    const target = queue.shift();
    
    answer.push(target);
    
    for(let i = 0; i < graph[target].length; i++) {
        const next = graph[target][i];
        
        inDegree[next] -= 1;
        
        if(inDegree[next] == 0) {
            queue.push(next);
        }
    }
}

console.log(answer.join(" "));