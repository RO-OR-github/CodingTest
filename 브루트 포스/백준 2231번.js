let fs = require("fs");
let input = fs.readFileSync("example.txt").toString(); //백준제출시'/dev/stdin'

for (i = 0; i <= 1000000; i++) {
  let ans = i;
  for (k = 0; k < i.toString().length; k++) {
    ans += parseInt(i.toString()[k]);
  }
  if (ans == parseInt(input)) {
    console.log(i);
    break;
  }
  if (i == 1000000) {
    console.log(0);
  }
}
