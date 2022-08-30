#!/usr/bin/env node

import gcdGame from '../index.js';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const gameInteract = () => {
  let firstNumber = Math.ceil((Math.random()) * 10);
  let secondNumber = Math.ceil((Math.random()) * 10);
  const numbersPair = `${firstNumber} and ${secondNumber}`;

  while (firstNumber !== 0 && secondNumber !== 0) { // the result will be equal to non-zero value
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const calculatedResult = firstNumber + secondNumber;

  return [numbersPair, String(calculatedResult)];
};

export default () => gcdGame(gameTitle, gameInteract);
