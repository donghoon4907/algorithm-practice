const fs = require("fs");

const [tcNum, ...inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];

let graph;
let visited;
let M;
let N;
let K;
let count;
let cursor = 0;

for(let i = 0; i < tcNum; i++) {
    [M, N, K] = inputs[cursor].split(" ").map(Number);
    graph = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    visited = Array.from({ length: M }, () => Array.from({ length: N }, () => 0));
    count = 0;
    cursor++;
    const temp = cursor;
    for(let j = temp; j < temp + K; j++) {
        const [x, y] = inputs[j].split(" ");
        graph[+x][+y] = 1;
        
        cursor++;
    }
    
    for(let j = 0; j < M; j++) {
        for(let k = 0; k < N; k++) {
            if(graph[j][k] == 1 && visited[j][k] == 0) {
                dfs(j, k);
                count++;
            }
        }
    }
    
    console.log(count);
}


function dfs(x, y) {
    visited[x][y] = 1;
    
    for(let i = 0; i < neighbor.length; i++) {
        const nX = x + neighbor[i][0];
        const nY = y + neighbor[i][1];
        
        if(0 <= nX && nX < M && 0 <= nY && nY < N && visited[nX][nY] == 0 && graph[nX][nY] == 1) {
            dfs(nX, nY);
        } 
    }
}