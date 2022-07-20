let fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n"); //백준제출시'/dev/stdin'

const N = input.shift();
const sorted = input.sort((a, b) => a - b);

for (let i = 0; i < N; i++) {
  console.log(sorted[i]);
}
