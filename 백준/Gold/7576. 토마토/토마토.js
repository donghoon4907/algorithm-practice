const fs = require("fs");

const [mn, ...strMatrix] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = mn.split(" ").map(Number);

const matrix = strMatrix.map(m => m.split(" ").map(Number));

const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];

const queue = [];

let cursor = 0;
let output = -1;
let isZero = false;

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(matrix[i][j] == 1) {
            queue.push([i, j]);
        }
    }
}

while(queue.length > cursor) {
    const [x, y] = queue[cursor];
    
    for(let i = 0; i < neighbor.length; i++) {
        const nX = x + neighbor[i][0];
        const nY = y + neighbor[i][1];
        
        if(0 <= nX && nX < n && 0 <= nY && nY < m && matrix[nX][nY] == 0) {
            matrix[nX][nY] = +matrix[x][y] + 1;
            
            queue.push([nX, nY]);
        }
    }
    
    cursor++;
}

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        output = Math.max(output, matrix[i][j]);
        
        if(matrix[i][j] == 0) {
            isZero = true;
        }
    }
}

if(isZero) {
    output = -1;
} else {
    output -= 1;
}

console.log(output);