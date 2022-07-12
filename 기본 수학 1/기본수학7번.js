let input = require("fs").readFileSync("/dev/stdin");

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }

  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}

// let input = require("fs").readFileSync("example.txt").toString().split(" "); //백준제출시'/dev/stdin'
// let n = Number(input[0]);

// if (n % 5 == 0) console.log(parseInt(n / 5));
// else if ((n % 5) % 3 == 0)
//   console.log(Math.floor(n / 5) + parseInt((n % 5) / 3));
// else if ((n % 3) % 5 == 0)
//   console.log(Math.floor(n / 3) + parseInt((n % 3) / 5));
// else if (n % 3 == 0) console.log(parseInt(n / 3));
// else if (Math.floor(n / 15) != 0 && ((((n % 15) + 15) % 5) + 5) % 3 == 0) {
//   let nn = (n % 15) + 15;
//   console.log(
//     Math.floor(
//       Math.floor(n / 15) * 3 -
//         3 +
//         (Math.floor(nn / 5) - 1 + Math.floor((nn % 5) + 5) / 3)
//     )
//   );
// } else if (Math.floor(n / 15) != 0 && ((((n % 15) + 15) % 3) + 3) % 5 == 0) {
//   let nn = (n % 15) + 15;
//   console.log(
//     Math.floor(
//       Math.floor(n / 15) * 3 -
//         3 +
//         (Math.floor(nn / 3) - 1 + Math.floor((nn % 3) + 3) / 5)
//     )
//   );
// } else if (Math.floor(n / 5) != 0 && ((n % 5) + 5) % 3 == 0)
//   console.log(Math.floor(n / 5) - 1 + Math.floor((n % 5) + 5) / 3);
// else if (Math.floor(n / 3) != 0 && ((n % 3) + 3) % 5 == 0)
//   console.log(Math.floor(n / 3) - 1 + Math.floor((n % 3) + 3) / 5);
// else console.log(-1);
