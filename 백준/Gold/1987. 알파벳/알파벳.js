const fs = require("fs");

const [first, ...another] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [R, C] = first.split(" ").map(Number);

const board = another.map(m => m.split(""));

const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];

const visited = Array.from({ length: 26 }, () => false);

console.log(dfs(0, 0, 1, visited));

function dfs(x, y, count, visited) {
    let maxCount = count;
    
    visited[board[x][y].charCodeAt() - 65] = true;
    
    for(let i = 0; i < 4; i++) {
        const nX = x + neighbor[i][0];
        const nY = y + neighbor[i][1];
        
        if(0 <= nX && nX < R && 0 <= nY && nY < C && !visited[board[nX][nY].charCodeAt() - 65]) {
            maxCount = Math.max(maxCount, dfs(nX, nY, count + 1, visited));
        }
    }
    
    visited[board[x][y].charCodeAt() - 65] = false;
     
    return maxCount;
}