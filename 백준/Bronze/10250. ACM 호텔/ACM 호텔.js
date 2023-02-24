const { readFileSync } = require("fs");

const [T, ...tc] = readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];

let y;
let x;
let floor;
let room;
let people;
for(let i = 0; i < +T; i++) {
    [floor, room, people] = tc[i].split(" ");
    
    x = Math.ceil(people / floor);
    
    y = people % floor;
    
    if(y == 0) {
        if(+people < +floor) {
            y = 1;
        } else {
            y = floor;
        }
    }
    
    if(x < 10) {
        x = `0${x}`;
    }
    
    answer.push(`${y}${x}`);
}

console.log(answer.join("\n"));