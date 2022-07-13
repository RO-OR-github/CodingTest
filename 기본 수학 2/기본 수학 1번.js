let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(/,| |\n/); //백준제출시'/dev/stdin'
let len = parseInt(input[0]);
let count = 0;
let bo = false;

for (i = 1; i <= len; i++) {
  num = parseInt(input[i]);

  for (k = 1; k <= Math.floor(Math.sqrt(num)); k++) {
    if ((num % k == 0 && k != 1) || num == 1) {
      console.log(num);
      bo = true;
      break;
    }
  }
  if (bo == false || num == 2) {
    count++;
  } else {
    bo = false;
  }
}
console.log(count);
