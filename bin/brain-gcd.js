#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const playerName = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${playerName}!\n`);
console.log('Find the greatest common divisor of given numbers.');

let playRound = 0;

while (playRound < 3) {
  let firstNumber = Math.ceil((Math.random()) * 10);
  let secondNumber = Math.ceil((Math.random()) * 10);

  console.log(`Question: ${firstNumber} and ${secondNumber}`);
  const playerResult = Number(readlineSync.question('Your answer: '));

  while (firstNumber !== 0 && secondNumber !== 0) { // the result will be equal to non-zero value
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const calculatedResult = firstNumber + secondNumber;

  if (playerResult !== calculatedResult) {
    console.log(`\nSorry! The answer "${playerResult}" was wrong! The correct answer was "${calculatedResult}".\n`);
    console.log(`Try again, ${playerName}\nBye.\n`);
    break; // die
  } else {
    console.log('Correct!');
    playRound += 1;
  }
  if (playRound === 3) {
    console.log(`\nCongratulations, ${playerName}! Well done!\nBye.\n`);
  }
}
