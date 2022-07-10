let input = require("fs").readFileSync("example.txt").toString().split("\n"); //백준제출시'/dev/stdin'

// console.log(Math.max.apply(null, input)); //es6문법은 안됨
input.forEach((ele, ind) => {
  if (ele == 85) console.log(ind + 1);
});
