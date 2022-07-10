let input = require("fs").readFileSync("example.txt").toString().split(""); //백준제출시'/dev/stdin'
let str = "";
let woarr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (i = 0; i < woarr.length; i++) {
  str += input.indexOf(woarr[i]) + " ";
}
str.trim();
console.log(str);

// let input = require("fs").readFileSync("example.txt").toString().split(""); //백준제출시'/dev/stdin'
// let str = "";
// let woarr = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let inarr = new Array(woarr.length);
// for (j = 0; j < inarr.length; j++) {
//   inarr[j] = -1;
// }

// for (i = 0; i < input.length; i++) {
//   for (k = 0; k < woarr.length; k++) {
//     if (input[i] == woarr[k]) {
//       inarr[k] = i;
//     }
//   }
// }
// inarr.forEach((element) => {
//   str += element + " ";
// });
// str = str.trim();
// console.log(str);
//반복문으로 구현을 했는데 동일한 문자
