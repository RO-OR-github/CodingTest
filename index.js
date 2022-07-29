const array = require("fs").readFileSync("example.txt").toString().split("\n"); //'/dev/stdin'
const num = parseInt(array.shift());

let sum = [];
let ans = 0;
for (i = 0; i < num; i++) {
  if (parseInt(array[i]) != 0) {
    sum.push(parseInt(array[i]));
  } else {
    sum.pop();
  }
}

for (k = 0; k < sum.length; k++) {
  ans += sum[k];
}

console.log(ans);
