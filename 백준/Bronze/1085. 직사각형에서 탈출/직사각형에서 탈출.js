const fs = require("fs");

const [x, y, w, h] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let distance = x;

distance = Math.min(distance, Math.abs(w - x));

distance = Math.min(distance, y);

distance = Math.min(distance, Math.abs(h - y));

console.log(distance);