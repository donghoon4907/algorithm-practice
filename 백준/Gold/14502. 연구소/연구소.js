const fs = require("fs");
const [first, ...another] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = first.split(" ").map(Number);
const matrix = another.map(m => m.split(" ").map(Number));

let answer;

addWall(0);

console.log(answer);

// 벽 추가
function addWall(count) {
    if(count == 3) {
        spreadVirus();  
    } else {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < M; j++) {
                if(matrix[i][j] == 0) {
                    matrix[i][j] = 1;
                    addWall(count + 1);
                    matrix[i][j] = 0;
                }
            }
        }
    }
}

function spreadVirus() {
    let safeZoneCount = 0;
    const cMatrix = JSON.parse(JSON.stringify(matrix));
    const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const queue = [];
  
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(cMatrix[i][j] == 2) {
                queue.push([i, j]);
            }
        }
    }
    
    while(queue.length > 0) {
        const [x, y] = queue.shift();
        
        for(let i = 0; i < neighbor.length; i++) {
            const nX = x + neighbor[i][0];
            const nY = y + neighbor[i][1];
            
            if(0 <= nX && nX < N && 0 <= nY && nY < M && cMatrix[nX][nY] == 0) {
                cMatrix[nX][nY] = 2;
                queue.push([nX, nY]);
            }
        }
    }
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(cMatrix[i][j] == 0) {
                safeZoneCount++;
            }
        }
    }
    
    if(answer) {
        answer = Math.max(answer, safeZoneCount);
    } else {
        answer = safeZoneCount;
    }
}