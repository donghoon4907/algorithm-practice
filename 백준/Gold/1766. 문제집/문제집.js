const { readFileSync } = require("fs");

const [NM, ...priorities] = readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = NM.split(" ").map(Number);

const graph = Array.from({ length: N + 1}, () => []);

const inDegree = Array.from({ length: N + 1 }).fill(0);

const queue = new PriorityQueue();

const answer = [];

for(let i = 0; i < M; i++) {
    const [next, prev] = priorities[i].split(" ");
    
    graph[+next].push(+prev);
    
    inDegree[+prev] += 1;
}

for(let i = 1; i <= N; i++) {
    if(inDegree[i] == 0) {
        queue.push(i);
    }
}

while(!queue.empty()) {
    const n = queue.shift();
    
    answer.push(n);
    
    for(let i = 0; i < graph[n].length; i++) {
        const next = graph[n][i];
        
        inDegree[next] -= 1;
        
        if(inDegree[next] == 0) {
            queue.push(next);
        }
    }
}

console.log(answer.join(" "));

function compareTo(a, b) {
    return a > b;
}


function PriorityQueue() {
    this.queue = [];
    
    this.push = function(next) {
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
        return this.queue.shift();
    }
    
    this.empty = function() {
        return this.queue.length == 0;
    }
}