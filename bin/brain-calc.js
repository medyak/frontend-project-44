#!/usr/bin/env node

import _ from 'lodash';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const playerName = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${playerName}!\n`);
console.log('What\'s the result of the expression?');

let playRound = 0;

while (playRound < 3) {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = Math.ceil((Math.random()) * 10);
  const operandTwo = Math.ceil((Math.random()) * 10);

  console.log(`Question: ${operandOne} ${operator} ${operandTwo}`);

  let calculatedResult = 0; // initialize me!!!

  // parseInt??
  switch (operator) {
    case '+':
      calculatedResult = Number(operandOne) + Number(operandTwo);
      break;

    case '-':
      calculatedResult = Number(operandOne) - Number(operandTwo);
      break;

    case '*':
      calculatedResult = Number(operandOne) * Number(operandTwo);
      break;

    default:
      break;
  }

  const playerResult = Number(readlineSync.question('Your answer: '));

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
