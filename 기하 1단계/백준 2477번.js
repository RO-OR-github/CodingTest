const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const inputList = input.split("\n");
const n = Number(inputList.shift());
const list = inputList.map((v) => v.split(" ").map(Number));

let Width = 0;
let Height = 0;
let a = 0;
let b = 0;

for (let i = 0; i < list.length; i++) {
  if ((list[i][0] === 1  list[i][0] === 2) && list[i][1] > Width) {
    Width = list[i][1];
  }
  if ((list[i][0] === 3  list[i][0] === 4) && list[i][1] > Height) {
    Height = list[i][1];
  }
}

for (let i = 0; i < list.length; i++) {
  if (i === 5) {
    a = list[1][1];
    b = list[2][1];
    break;
  }
  if (
    (list[i][1] === Width || list[i][1] === Height) &&
    list[i + 1][1] !== Width &&
    list[i + 1][1] !== Height
  ) {
    if (i === 0) {
      a = list[2][1];
      b = list[3][1];
    }
    if (i === 1) {
      a = list[3][1];
      b = list[4][1];
    }
    if (i === 2) {
      a = list[4][1];
      b = list[5][1];
    }
    if (i === 3) {
      a = list[5][1];
      b = list[0][1];
    }
    if (i === 4) {
      a = list[0][1];
      b = list[1][1];
    }
    break;
  }
}

console.log(${(Width * Height - a * b) * n});