import startGcdGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameData = () => {
  let firstNumber = getRandomValue(1, 15);
  let secondNumber = getRandomValue(1, 15);
  const numbersPair = `${firstNumber} ${secondNumber}`;

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

export default () => startGcdGame(gameDescription, gameData);
