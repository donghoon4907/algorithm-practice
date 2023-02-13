const { readFileSync } = require("fs");

const [T, ...inputs] = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

let len;
let index;
let queue;
let count = 0;
let highestPriority;
for(let i = 0; i < +T; i++) {
    [len, index] = inputs[i * 2].split(" ").map(Number);
    queue = inputs[i * 2 + 1].split(" ").map((p, i) => new Document(+p, i == index));
    highestPriority = getHighestPriority();
    
    while(true) {
        const docu  = queue.shift();
        
        // 우선순위가 가장 높은 경우
        if(docu.priority == highestPriority) {
            // 가장 높은 우선순위 갱신
            highestPriority = getHighestPriority();
            // 인쇄횟수 증가
            count++;
            // 대상 문서인 경우
            if(docu.target) {
                break;
            }
        } else {
            queue.push(docu);
        }
    }
    
    answer.push(count);
    count = 0;
}

console.log(answer.join("\n"));

function getHighestPriority() {
    let result = 0;
    for(let i = 0; i < queue.length; i++) {
        result = Math.max(result, queue[i].priority);
    }
    
    return result;
}

function Document(priority, target) {
    this.priority = priority;
    this.target = target;
}