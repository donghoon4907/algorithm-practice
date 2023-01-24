const fs = require("fs");

const n = fs.readFileSync("/dev/stdin").toString().trim();

const arr = Array.from({ length: n }, (_, i) => i + 1);

let answer = [];

function f(nums, permutation) {
    if (nums.length === 0) {
        answer.push(permutation.join(" "));
    } else {
        for (let i = 0; i < nums.length; i++) {
            f([...nums.slice(0, i), ...nums.slice(i + 1)], [...permutation, nums[i]]);
        }
    }
}

f(arr, []);
console.log(answer.join("\n"));