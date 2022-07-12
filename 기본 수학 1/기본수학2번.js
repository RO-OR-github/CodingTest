let input = require("fs").readFileSync("example.txt"); //.toString().split(" "); //백준제출시'/dev/stdin'
let num = Number(input);
let as;
for (i = 0; i < 18258; i++) {
  //최대숫자를 유도한 공식으로 나눴을때
  if (1 + 3 * i + 3 * (i * i) >= num) {
    //등차수열로 유도
    as = i + 1;
    break;
  }
}
console.log(as);
