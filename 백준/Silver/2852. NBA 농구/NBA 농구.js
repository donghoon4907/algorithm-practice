const fs = require("fs");

const [goalCount, ...goalReport] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let aScore = 0;
let bScore = 0;
let aTime = 0;
let bTime = 0;
let cur = 0;
let aM, aS, bM, bS;

for(let i  = 0; i < goalReport.length; i++) {
    const [team, strTime] = goalReport[i].split(" ");
    
    const [m, s] = strTime.split(":");
    
    const time = (+m * 60) + (+s);
    
    if(aScore > bScore) {
        aTime += time - cur;
    } else if (aScore < bScore) {
        bTime += time - cur;
    }
    
    if(team == 1) {
        aScore++;
    } else {
        bScore++;
    }
    
    cur = time;
}

if(aScore > bScore) {
    aTime += 48 * 60 - cur;
} else if(aScore < bScore) {
    bTime +=  48 * 60 - cur;
} 

aM = Math.floor(aTime / 60);
aS = aTime % 60;
bM = Math.floor(bTime / 60);
bS = bTime % 60;

if(aM < 10) {
    aM = "0" + aM
} 

if(aS < 10) {
    aS = "0" + aS
} 

if(bM < 10) {
    bM = "0" + bM
} 

if(bS < 10) {
    bS = "0" + bS;
}

console.log(`${aM}:${aS}`);
console.log(`${bM}:${bS}`);