const fs = require("fs");

const [nmv, ...strEdges] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, v] = nmv.split(" ").map(Number);

const edges = strEdges.map(edge => edge.split(" ").map(Number));

const graph = Array.from({ length: n + 1}, () => []);
let from;
let to;
for(let i = 0; i < edges.length; i++) {
    from = edges[i][0];
    to = edges[i][1];
    graph[from].push(to);
    graph[to].push(from);
}

for(let i = 0; i < graph.length; i++) {
    graph[i] = graph[i].sort((a, b) => b - a);
}
console.log(dfs(v));

for(let i = 0; i < graph.length; i++) {
    graph[i] = graph[i].sort((a, b) => a - b);
}
console.log(bfs(v));

function dfs(startNode) {
    const result = [];
    
    const visited = Array.from({ length: n + 1}, () => 0);
    
    const stack = [];
    
    stack.push(startNode);
    
    while(stack.length > 0) {
        const node = stack.pop();
        
        if(visited[node] == 0) {
            visited[node] = 1;
            result.push(node);
            stack.push(...graph[node]);
        }
    }
    
    return result.join(" ")
}

function bfs(startNode) {
    const result = [];
    
    const visited = Array.from({ length: n + 1}, () => 0);
    
    const queue = [];
    
    queue.push(startNode);
    
    while(queue.length > 0) {
        const node = queue.shift();
        
        if(visited[node] == 0) {
            visited[node] = 1;
            result.push(node);
            queue.push(...graph[node]);
        }
    }
    
    return result.join(" ");
}