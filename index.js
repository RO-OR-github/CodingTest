let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'

var a = parseInt(input[0]);
let num1;
let num2;
let newnum;
let result = 0;
let count = 0;
let original = a;

while (original != result) {
  if (a < 10) {
    num1 = 0;
    num2 = a;
  } else {
    num1 = parseInt(a / 10);
    num2 = a % 10;
  }

  newnum = num1 + num2;
  result = num2 * 10 + parseInt(newnum % 10);
  count++;

  a = result;
}
console.log(count);
