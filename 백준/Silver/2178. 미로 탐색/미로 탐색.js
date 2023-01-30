const fs = require("fs");

const [nm, ...strMatrix] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

const maze = strMatrix.map(m => m.split(""));

const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];

console.log(bfs(maze));

function bfs(maze) {
    let count = 0;
    
    const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));
    
    const queue = [];
    
    queue.push([0, 0]);
    
    visited[0][0] = 1;
    
    count++;
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        for(let i = 0; i < neighbor.length; i++) {
            const nX = x + neighbor[i][0];
            const nY = y + neighbor[i][1];
            
            if(0 <= nX && nX < n && 0 <= nY && nY < m && visited[nX][nY] == 0 && maze[nX][nY] == 1) {
                visited[nX][nY] = visited[x][y] + 1;
                
                queue.push([nX, nY]);
            }
        }
    }
    
    return visited[n - 1][m - 1];
}