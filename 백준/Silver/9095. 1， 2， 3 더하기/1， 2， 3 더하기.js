const fs = require("fs");

const [n, ...testCases] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const conditions = [1, 2, 3];

let answer = [];

let numOfCases = [];

function f(num, permutation) {
    for(let i = 0; i < conditions.length; i++) {
        const sumP = permutation.reduce((acc, cur) => acc + cur, 0);
        
        if(sumP + conditions[i] == num) {
            numOfCases.push([...permutation, conditions[i]]); 
        } else if(sumP + conditions[i] < num) {
            f(num, [...permutation, conditions[i]]);
        } else {
            break;
        }
    }
}

for(let i = 0; i < testCases.length; i++) {
    f(testCases[i], []);
    answer.push(numOfCases.length);
    numOfCases = [];
}

console.log(answer.join("\n"));