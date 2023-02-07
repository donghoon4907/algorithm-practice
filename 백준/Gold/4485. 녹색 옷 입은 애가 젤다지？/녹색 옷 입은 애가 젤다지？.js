const fs = require("fs");

const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const neighbor = [[0, -1], [1, 0], [0, 1], [-1, 0]];
// 동굴의 크기
let N;
// 동굴
let cave;
// inputs 위치값
let cursor = 0;
// 다익스트라 실행 번호
let execCount = 1;

while (cursor < inputs.length) {
    N = +inputs[cursor];
    // 동굴의 크기가 0인 경우 전체 입력 종료
    if(N === 0) {
        break;
    }
    
    cave = inputs.slice(cursor + 1, cursor + 1 + N).map(c => c.split(" "));
    
    dijkstra();
    
    cursor += 1 + N;
}

function compareTo(a, b) {
    return a.rupoors > b.rupoors;
} 

function Pos(x, y, rupoors) {
    this.x = x;
    this.y = y;
    this.rupoors = rupoors;
}

function PriorityQueue() {
    this.queue = [];
    
    this.length = function() {
        return this.queue.length;
    }
  
    this.push = function(pos) {
        const next = new Pos(...pos);
        
        let isContain = false;
        for(let i = 0, j = this.queue.length; i<j; i++) {
            if(compareTo(this.queue[i], next)) {
                this.queue.splice(i, 0, next);
                isContain = true;
                break;
            }
        }
  
        if(!isContain) {
            this.queue.push(next);
        }
    }
    
    this.shift = function() {
        const { x, y, rupoors } = this.queue.shift();
        
        return [x, y, rupoors];
    }
}

function dijkstra() {
    const distances = Array.from({ length: N }, () => Array.from({ length: N }, () => Infinity));
    
    distances[0][0] = +cave[0][0];
    
    const queue = new PriorityQueue();
    
    queue.push([0, 0, +cave[0][0]]);
    
    while(queue.length() > 0) {
        const [x, y, weight] = queue.shift();
        
        for(let i = 0; i < neighbor.length; i++) {
            const nX = x + neighbor[i][0];
            const nY = y + neighbor[i][1];
            
            if(0 <= nX && nX < N && 0 <= nY && nY < N) {
                const cost = +cave[nX][nY];
                
                if(distances[nX][nY] > weight + cost) {
                    distances[nX][nY] = weight + cost;
                    
                    queue.push([nX, nY, distances[nX][nY]]);
                }
            }
        }
    }
    
    console.log(`Problem ${execCount}: ${distances[N - 1][N - 1]}`);
    execCount++;
}