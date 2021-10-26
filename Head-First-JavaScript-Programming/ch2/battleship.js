/*
 * @Descripttion:
 * @version:
 * @Author: Mirst
 * @Date: 2021-10-26 11:16:31
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-26 14:47:56
 */
const randomLoc = ~~(Math.random() * 5);
let shipLocation = [
  [randomLoc, false],
  [randomLoc + 1, false],
  [randomLoc + 2, false],
];
let isSunk = false;
let guesses = 0;
let guess;

while (!isSunk) {
  // 返回的是string/null
  guess = prompt("Ready,aim,firel (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
    continue;
  }
  guesses += 1;
  if (guess == shipLocation[0][0] && !shipLocation[0][1]) {
    shipLocation[0][1] = true;
    alert("HIT!!!");
  } else if (guess == shipLocation[1][0] && !shipLocation[1][1]) {
    shipLocation[1][1] = true;
    alert("HIT!!!");
  } else if (guess == shipLocation[2][0] && !shipLocation[2][1]) {
    shipLocation[2][1] = true;
    alert("HIT!!!");
  }
  if (shipLocation[0][1] && shipLocation[1][1] && shipLocation[2][1])
    isSunk = true;
}

alert("You sank my battleship!");
const stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${
  3 / guesses
}`;
alert(stats);

