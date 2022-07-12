let input = require("fs").readFileSync("example.txt"); //.toString().split(" "); //백준제출시'/dev/stdin'
let num = Number(input);
let up;
let down;
for (i = 1; i <= 4472; i++) {
  // 최댓값의 제곱 *2 보다 커야함
  let sum = Math.floor((i * (i + 1)) / 2);
  if (num <= Math.floor((i * (i + 1)) / 2)) {
    if (i % 2 == 0) {
      up = i - (sum - num);
      down = Math.floor(sum % num) + 1;
    } else {
      up = Math.floor(sum % num) + 1;
      down = i - (sum - num);
    }
    break;
  }
}
console.log(up + "/" + down);
