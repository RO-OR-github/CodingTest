// let input = require("fs").readFileSync("example.txt").toString().split("\n"); //백준제출시'/dev/stdin'
let num = new Array(9999); //0부터 9999
let nnum = [];
let n;

for (a = 0; a < 10; a++) {
  for (b = 0; b < 10; b++) {
    for (c = 0; c < 10; c++) {
      for (d = 0; d < 10; d++) {
        n = 1000 * a + 100 * b + 10 * c + d + a + b + c + d;
        if (n <= 10000) {
          num[n] = n; //인덱스 와 값 동일
        }
      }
    }
  }
} //n이 만이 넘지 않게

// for (k = 0; k <= 10000; k++) {
//   n = k + Math.floor(k / 1000) + Math.floor(k / 100) + Math.floor(k / 10) + (k % 10); //몫계산
//   if (n <= 10000) {
//     num[n] = n;
//   }
// }  => n이 만까지여야 하므로 x

for (i = 0; i < 10000; i++) {
  //향상된 for문들은 undefined값을 불러오지 않아 오류가 났다.
  if (num[i] === undefined) {
    nnum.push(i); //arraylist기능
  }
}

nnum.forEach((element) => {
  console.log(element);
});
