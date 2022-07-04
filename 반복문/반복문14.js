let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'
var a = parseInt(input[0]);
let num1;
let num2;
let newnum;
let result = 0;
let count = 0;
let original = a; //a를 반복문안에 넣어서 사용 해야하므로

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

// let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'

// var a = parseInt(input[0]);
// let num;
// let newnum;
// let count = 0;
// let leftnum;

// if (a > 99 || a < 0) {
//   console.log("잘못입력하셨습니다.");
// }

// if (a < 10) {
//   a = "0" + a.toString();
//   num = a.split("");
// } else {
//   num = a.toString().split("");
// }

// leftnum = (parseInt(num[0]) + parseInt(num[1])).toString().split("");
// if (leftnum.length == 1) newnum = num[1] + leftnum[0];
// if (leftnum.length == 2) newnum = num[1] + leftnum[1];
// count++;
// while (a.toString() != newnum) {
//   leftnum = (parseInt(newnum[0]) + parseInt(newnum[1])).toString().split("");
//   if (leftnum.length == 1) newnum = newnum[1] + leftnum[0];
//   if (leftnum.length == 2) newnum = newnum[1] + leftnum[1];

//   count++;
// }
// console.log(count);
