const { readFileSync } = require("fs");

const N = readFileSync("/dev/stdin").toString().trim();

const list = new LinkedList();

for(let i = 1; i <= +N; i++) {
    list.add(i);
}

while(list.len > 1) {
    // 제일 위에 있는 카드를 바닥에 버린다
    list.removeHead();
    // 제일 아래에 있는 카드 밑으로 옮긴다
    list.add(list.head.value);
    list.removeHead();
}

console.log(list.head.value);

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.len = 0;
    
    this.add = function(value) {
        const n = new Node(value);
        
        if(this.head == null) {
            this.head = n;
        } else {
            this.tail.next = n;
            n.prev = this.tail;
        }
        
        this.tail = n;
        this.len++;
        
        return n;
    }
    
    this.removeHead = function() {
        this.head = this.head.next;
        this.head.prev = null;
        this.len--;
    }
}

function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}
