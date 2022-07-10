let input = require("fs").readFileSync("example.txt").toString().trim().split(" "); //백준제출시'/dev/stdin'

console.log(input[0] === "" ? 0 : input.length); //공백값이 들어올 수 도 있으므로
