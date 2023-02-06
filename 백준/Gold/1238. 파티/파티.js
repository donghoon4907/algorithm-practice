const fs = require("fs");

const [nmx, ...loads] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, X] = nmx.split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

const allDistances = Array.from({ length: N + 1}, () => []);

let answer = 0;

for(let i = 0; i < M; i++) {
    const [start, end, t] = loads[i].split(" ");
    
    graph[+start].push([+end, +t]);
}

for(let start = 1; start <= N; start++) {
    allDistances[start] = dijkstra(start);
}

for(let start = 1; start <= N; start++) {
    answer = Math.max(answer, allDistances[start][X] + allDistances[X][start]);
}

console.log(answer);

function dijkstra(start) {
    const distance = Array.from({ length: N + 1 }, () => Infinity);
    
    const queue = [];
    
    distance[start] = 0;
    
    queue.push([start, 0]);
    
    while(queue.length > 0) {
        const [cur, weight] = queue.shift();
        
        for(let i = 0; i < graph[cur].length; i++) {
            const [end, cost] = graph[cur][i];
            
            if(distance[end] > weight + cost) {
                distance[end] = weight + cost;
                
                queue.push([end, distance[end]]);
            }
        }
    }
    
    return distance;
}