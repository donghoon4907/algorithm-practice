const fs = require("fs");

const [N, ...words] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 중복문자 제거
const filteredWords = Array.from(new Set(words));
// 길이별 정렬
const sortByLen = filteredWords.sort((a, b) => a.length - b.length);

const answer = [];
// 길이가 가장 긴 문자의 길이 만큼 반복
for(let i = 1; i <= sortByLen[sortByLen.length - 1].length; i++) {
    // 길이가 동일한 목록 
    const temp = sortByLen.filter(w => w.length == i);
    // 사전 순 정렬하여 추가
    answer.push(...temp.sort());
}

console.log(answer.join("\n"));