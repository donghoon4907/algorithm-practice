const fs = require("fs");

const [compNum, edgeNum, ...strEdges] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const edges = strEdges.map(e => e.split(" "));

const graph = Array.from({ length: +compNum + 1 }, () => []);

let from;
let to;
for(let i = 0; i < +edgeNum; i++) {
    from = +edges[i][0];
    to = +edges[i][1];
    
    graph[from].push(to);
    graph[to].push(from);
}

console.log(dfs())

function dfs() {
    let count = 0;
    
    const visited = Array.from({ length: compNum }, () => 0);
    
    const stack = [];
    
    stack.push(1);
    
    while(stack.length > 0) {
        const comp = stack.pop();
        
        if(visited[comp - 1] == 0) {
             visited[comp - 1] = 1;
             
             count++;
        
            stack.push(...graph[comp]);
        }
    }
    
    return count - 1;
}