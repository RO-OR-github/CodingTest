let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'
let a = Number(input[0]);
let b = Number(input[1]);
let v = Number(input[2]);
let h = 0;
let count = 1;

// while (true) {
//   h += a;
//   if (h >= v) break;
//   h -= b;
//   count++;
// }
// console.log(count);
//시간복잡도 때문에
// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((v - b) / (a - b)));
