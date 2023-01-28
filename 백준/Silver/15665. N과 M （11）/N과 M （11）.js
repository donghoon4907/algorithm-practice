const fs = require("fs");

const [nm, strArr] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = nm.split(" ").map(Number);

const arr = strArr.split(" ").map(Number).sort((a, b) => a - b);

const result = new Set();

pwr(arr);

console.log(Array.from(result).join("\n"));

function pwr(nums, temp = []) {
    if(temp.length == m) {
        const next = temp.join(" ");
        
        if(!result.has(next)) {
            result.add(next);
        }
        
    } else {
        for(let i = 0; i < nums.length; i++) {
            pwr(nums, [...temp, nums[i]])
        }
    }
}
