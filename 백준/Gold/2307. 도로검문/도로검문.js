const { readFileSync } = require("fs");

const [NM, ...roads] = readFileSync("/dev/stdin").toString().trim().split("\n");
// N: 정점의 수 M: 도로의 수
const [N, M] = NM.split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => 0));

for(let i = 0; i < M; i++) {
    const [start, end, t] = roads[i].split(" ");
    
    graph[+start][+end] = +t;
    graph[+end][+start] = +t;
}
// 최단 경로 저장 여부
let isSaveRoutes = true;
// 최단 경로 - 각 인덱스에 이전에 방문한 노드를 기록
const routes = Array.from({ length: N + 1 }, () => 0);

// 검문이 없는 경우
const noCheckCost = dijkstra(1);

isSaveRoutes = false;
// 지연시간
let delay = 0;
// 검문이 있는 경우
let checkCost;
// 도착점
let cursor = N;
// 임시 비용 저장
let tempCost;
while(true) {
    const start = routes[cursor];
    
    tempCost= graph[start][cursor];
    
    graph[start][cursor] = 0;
    graph[cursor][start] = 0;
    
    checkCost = dijkstra(1);
    
    delay = Math.max(delay, Math.abs(noCheckCost - checkCost));
    
    graph[start][cursor] = tempCost;
    graph[cursor][start] = tempCost;
    
    cursor = start;
    // 도착점이 1인 경우 종료
    if(cursor == 1) {
        break;
    }
}

if(delay == Infinity) {
    console.log(-1);
} else {
    console.log(delay);
}

function dijkstra(start) {
    const distances = Array.from({ length: N + 1 }, () => Infinity);
    
    const queue = new PriorityQueue();
    
    queue.push(start, 0);
    
    distances[start] = 0;
    
    while(!queue.empty()) {
        const [cur, weight] = queue.shift();
        
        for(let i = 1; i <= N; i++) {
            const cost = graph[cur][i];
            
            if(cost == 0) {
                continue;
            }
            
            if(distances[i] > weight + cost) {
                distances[i] = weight + cost;
                
                queue.push(i, distances[i]);
                // 이전에 방문한 노드 저장
                if(isSaveRoutes) {
                    routes[i] = cur;
                }
            }
        }
    }
    
    return distances[N];
}

function compareTo(a, b) {
    return a.cost > b.cost;
}

function Node(node, cost) {
    this.node = node;
    this.cost = cost;
}

function PriorityQueue() {
    this.queue = [];
    
    this.push = function(node, cost) {
        const next = new Node(node, cost);
        
        let isContain = false;
        for(let i  = 0, j = this.queue.length; i < j; i++) {
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
        const { node, cost } = this.queue.shift();
        
        return [node, cost];
    }
    
    this.empty = function() {
        return this.queue.length == 0;
    }
}