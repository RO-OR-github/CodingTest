let fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\n"); //백준제출시'/dev/stdin'

const N = parseInt(input.shift());
let sum = 0;
let max = 0;
let arr = [[]];

let king;
//산술평균
for (i = 0; i < N; i++) {
  sum += parseInt(input[i]);
}
console.log(Math.round(sum / N));

//중앙값
input.sort();
console.log(input[Math.round(N / 2) - 1]);

//최빈값
//음일 때를 해결 못함
// for (i = 0; i < N; i++) {
//   if (input.length == 1) {
//     break;
//   }
//   let man = 0;
//   for (k = i; k < N; k++) {
//     if (input[i] == input[k]) {
//       man++;
//     } else {
//       break;
//     }
//   }
//   if (i != 0) {
//     if (input[i] != input[i - 1]) {
//       max = man;
//       arr.push([man, input[i]]);
//     }
//   } else {
//     max = man;
//     arr.push([man, input[i]]);
//   }
// } //arr 각 숫자 빈도 수 배열
// // console.log(arr[1][0]);
// if (input.length > 1) {
//   for (i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       king = 0;
//     } else {
//       if (arr[i][0] > arr[i - 1][0]) {
//         king = arr[i][1];
//       } else if (arr[i][0] == arr[i - 1][0]) {
//         if (i == 1) {
//           king = arr[i][1];
//         } else {
//           if (arr[i - 2][0] != arr[i - 1][0]) {
//             king = arr[i][1];
//           }
//         }
//       }
//     }
//   }
//   console.log(king);
// } else {
//   console.log(input[0] + "ss");
// }

//범위
console.log(input[N - 1] - input[0]);
