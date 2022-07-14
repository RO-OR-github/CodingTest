let input = require("fs").readFileSync("example.txt").toString().split("\n");

var decimal = 0;
var decimalN = [];
var count = 0;

console.log(input);

const findDecimal = (min) => {
  decimal = 0;
  for (x = min + 1; x <= 2 * min; x++) {
    count = 0;
    for (j = x; j > 0; j--) {
      if (x % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      decimal++;
    }
  }
  return decimal;
};

var len = input.length;

console.log(len);

for (y = 0; y < len - 1; y++) {
  console.log(y);
  decimalN[y] = findDecimal(parseInt(input[y]));
}

for (i = 0; i < len - 1; i++) {
  console.log(decimalN[i]);
}
