let input = require("fs").readFileSync("example.txt").toString(); //백준제출시'/dev/stdin'

let arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let count2 = 0;
let count3 = 0;
let oneword = 0;
//입력받은 문자열에서 배열에 해당하는 부분 찾기
if (input.length >= 3) {
  for (k = 0; k < input.length - 2; k++) {
    for (i = 0; i < arr.length; i++) {
      if (input[k] + input[k + 1] + input[k + 2] == arr[i]) {
        count3++;
      }
    }
  }
}

if (input.length >= 2) {
  for (k = 0; k < input.length - 1; k++) {
    for (i = 0; i < arr.length; i++) {
      if (input[k] + input[k + 1] == arr[i]) {
        count2++;
      }
    }
  }
}
oneword = input.length - 2 * count2 - count3;
console.log(oneword + count2);
