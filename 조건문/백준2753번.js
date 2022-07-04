let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'
var a = parseInt(input[0]);
if (a % 4 == 0 && (a % 100 != 0 || a % 400 == 0)) {
  console.log("1");
} else {
  console.log("0");
}
