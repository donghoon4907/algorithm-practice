const fs = require("fs");

const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// N: 정점의 개수 E: 간선의 개수
const [N, E] = inputs[0].split(" ").map(Number);

const edges = inputs.slice(1, E + 1);

const [v1, v2] = inputs[inputs.length - 1].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
// 1 -> v1 -> v2 -> N
let case1 = 0;
// 1 -> v2 -> v1 -> N
let case2 = 0;

for(let i = 0; i < E; i++) {
    const [start, end, cost] = edges[i].split(" ");
    
    graph[+start].push([+end, +cost]);
    graph[+end].push([+start, +cost]);
}

case1 += dijkstra(1, v1);
case1 += dijkstra(v1, v2);
case1 += dijkstra(v2, N);

case2 += dijkstra(1, v2);
case2 += dijkstra(v2, v1);
case2 += dijkstra(v1, N);

if(case1 == Infinity && case2 == Infinity) {
    console.log(-1)
} else {
    console.log(Math.min(case1, case2));
}

function dijkstra(start, end) {
    const distances = Array.from({ length: N + 1 }, () => Infinity);
    
    const queue = [[start, 0]];
    
    distances[start] = 0;
    
    while(queue.length > 0) {
        const [cursor, weight] = queue.shift();
        
        for(let i = 0; i < graph[cursor].length; i++) {
            const [dest, cost] = graph[cursor][i];
            
            if(distances[dest] > weight + cost) {
                distances[dest] = weight + cost;
                
                queue.push([dest, distances[dest]]);
            }
        }
    }
    
    return distances[end];
}