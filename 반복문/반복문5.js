let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'

var a = parseInt(input[0]);
let i;
for (i = 1; i <= a; i++) {
  console.log(i);
}
