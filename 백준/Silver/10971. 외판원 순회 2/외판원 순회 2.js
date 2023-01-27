const fs = require("fs");

const [n, ...strMatrix] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const matrix = strMatrix.map(m => m.split(" ").map(Number));

const vCitys = Array.from({ length: n }, (_, idx) => idx);

let output = Infinity;

f(vCitys);

console.log(output);

function f(nums, permutation = []) {
    if(nums.length == 0) {
        permutation.push(permutation[0]);
        
        let sum = 0;
        
        let cost;
        for(let i = 0; i < n; i++) {
            cost = matrix[permutation[i]][permutation[i + 1]];
            
            if(cost == 0) {
                sum = Infinity;
                
                break;
            }
            
            sum += cost;
        }
    
        output = Math.min(output, sum);
    } else { 
        for(let i = 0; i < nums.length; i++) {
            f([...nums.slice(0, i), ...nums.slice(i + 1)], [...permutation, nums[i]]);
        }
    }
}