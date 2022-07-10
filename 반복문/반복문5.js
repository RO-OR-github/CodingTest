// let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'

// var a = parseInt(input[0]);
// let i;
// for (i = 1; i <= a; i++) {
//   console.log(i);
// }

let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let answer = "";

for (let i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
