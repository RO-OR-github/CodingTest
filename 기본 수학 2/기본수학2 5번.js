let input = require("fs").readFileSync("example.txt").toString().split("\n"); //백준제출시'/dev/stdin'
let len = input.length;

const bre = (len) => {
  for (i = 0; i < len; i++) {
    let count = 0;
    let bo = false;
    if (parseInt(input[i]) != 0) {
      min = parseInt(input[i]) + 1;
      max = 2 * parseInt(input[i]);
      for (j = min; j <= max; j++) {
        for (k = 1; k <= Math.floor(Math.sqrt(j)); k++) {
          if ((j % k == 0 && k != 1)  j == 1) {
            bo = true;
            break;
          }
        }
        if (bo == false  j == 2) {
          count++;
        } else {
          bo = false;
        }
      }
      console.log(count);
    } else {
      return 0;
    }
  }
};
bre(len);