let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
