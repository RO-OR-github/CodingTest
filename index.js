const input = require("fs").readFileSync("example.txt").toString().split("\n"); //'/dev/stdin'

const om = Number(input.shift());

const ea = [];
const we = [];
const so = [];
const no = [];
let [maxew, maxsn, minew, minsn] = [0, 0, 0, 0];
let width = 0;
for (i = 0; i < input.length; i++) {
  let dir = input[i].split(" ");
  switch (Number(dir[0])) {
    case 1:
      ea.push(Number(dir[1]));
      break;
    case 2:
      we.push(Number(dir[1]));
      break;
    case 3:
      so.push(Number(dir[1]));
      break;
    case 4:
      no.push(Number(dir[1]));
      break;
    default:
      console.log("잘못된값");
      break;
  }
}
if (ea.length == 2) {
  if (so.length == 2) {
  } else {
  }
} else {
  if (so.length == 2) {
  } else {
  }
}

// maxew = Math.max(...eawe);
// maxsn = Math.max(...sono);
// minew = Math.min(...eawe);
// minsn = Math.min(...sono);

// width = maxew * maxsn - minew * minsn;
console.log(width * om);
