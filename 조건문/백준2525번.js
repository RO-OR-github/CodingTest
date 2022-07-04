let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(/,| |\n/); //정규 표현식 사용
//백준제출시'/dev/stdin'
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

let time;
let min;
let hour;
if (a <= 24 || b <= 60) {
  if (0 <= a <= 23 && b + c <= 59) {
    console.log(a + " " + (b + c));
  } else {
    time = parseInt(a * 60 + (b + c));
    min = parseInt(time % 60);
    hour = parseInt((time / 60) % 24);
    console.log(hour + " " + min);
  }
} else {
  console.log("잘못 입력 하셨습니다.");
}
