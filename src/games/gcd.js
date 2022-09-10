import startGcdGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameRoundData = () => {
  let firstNumber = getRandomValue(1, 15);
  let secondNumber = getRandomValue(1, 15);
  const question = `${firstNumber} ${secondNumber}`;

  while (firstNumber !== 0 && secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber %= secondNumber;
    } else {
      secondNumber %= firstNumber;
    }
  }
  const answer = firstNumber + secondNumber;

  return [question, String(answer)];
};

export default () => startGcdGame(gameDescription, gameRoundData);
