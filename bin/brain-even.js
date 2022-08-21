#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const playerName = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${playerName}!\n`);
console.log('Please answer "yes" if the number is even, otherwise answer "no".');

let playRound = 0;
while (playRound < 3) {
  const randomNumber = Math.ceil((Math.random()) * 100); // make a  random number
  const isCorrect = randomNumber % 2 === 0 ? 'yes' : 'no'; // even / odd check

  console.log(`\nQuestion: ${randomNumber}`); // вопрос с числом
  const playerAnswer = readlineSync.question('Answer: '); // ответ пользователя

  if (playerAnswer !== isCorrect) {
    console.log(`Sorry! Answer "${playerAnswer}" is wrong! Correct answer was "${isCorrect}".\n`);
    console.log(`Try again, ${playerName}\nBye.\n`);
    break;
  }

  if (playerAnswer === isCorrect) {
    console.log('Correct!');
    playRound += 1;
  }

  if (playRound === 3) {
    console.log(`\nCongratulations, ${playerName}! Well done!\nBye.\n`);
  }
}
