const fs = require("fs");

const [NM, ...boardRows] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// N: 행 수 M: 열 수
const [N, M] = NM.split(" ").map(Number);
// 전체 보드
const board = boardRows.map(b => b.split(""));

const testCase = ["WBWBWBWB", "BWBWBWBW"];

const answer = [];
// 8 x 8로 자를 때 경우의 수
for(let i = 0; i <= N - 8; i++) {
    for(let j = 0; j <= M - 8; j++) {
        // 첫 번째 문자가 W / B 일 경우의 수
        for(let k = 0; k < 2; k++) {
            // 변경된 횟수
            let count = 0;
            // 8 x 8 보드 탐색
            for(let x = 0; x < 8; x++) {
                for(let y = 0; y < 8; y++) {
                    // 현재 탐색된 색상
                    const color = board[i + x][j + y];
                    
                    if(testCase[(x + k) % 2][y] != color) {
                        count++;
                    }
                }
            }
            
            answer.push(count);
        }
    }
}

console.log(Math.min(...answer));