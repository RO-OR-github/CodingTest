let fs = require("fs");
let input = fs
  .readFileSync("example.txt")
  .toString()
  .split(/,| |\n/); //백준제출시'/dev/stdin'

input.shift();

let str = "";
for (i = 0; i < input.length; i += 2) {
  let grade = 1;
  for (k = 0; k < input.length; k += 2) {
    if (input[i] < input[k] && input[i + 1] < input[k + 1]) {
      grade += 1;
    }
  }
  str += grade.toString() + " ";
}
str = str.trim();
console.log(str);
