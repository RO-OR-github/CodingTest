let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .split(/,| |\n/); //백준제출시'/dev/stdin'
let len = parseInt(input[0]);
let str = [];
const fun = (str) => {
  let arr = [];
  for (i = 1; i <= len; i++) {
    let bo = false;
    num = parseInt(input[i]);
    for (l = 1; l < num; l++) {
      for (k = 1; k <= Math.floor(Math.sqrt(l)); k++) {
        if ((l % k == 0 && k != 1) || l == 1) {
          bo = true;
          break;
        }
      }
      if (bo == false || l == 2) {
        arr.push(l);
      } else {
        bo = false;
      }
    } //소수찾기

    let sim = 10005;
    let a1, a2;
    for (y = 0; y < arr.length; y++) {
      //답구하기
      let answer = num - arr[y]; //가장작은 소수
      for (t = 0; t < arr.length; t++) {
        if (answer == arr[t]) {
          if (sim > Math.abs(arr[t] - arr[y])) {
            sim = Math.abs(arr[t] - arr[y]);
            a1 = arr[y];
            a2 = arr[t];
          }
        }
      }
    }
    str.push(a1 + " " + a2);
  }
};

fun();
str.forEach((element) => {
  console.log(element);
});
