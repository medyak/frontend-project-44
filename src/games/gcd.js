import startGcdGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;

  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return first + second;
};

const gameRoundData = () => {
  const firstNumber = getRandomValue(1, 15);
  const secondNumber = getRandomValue(1, 15);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);

  return [question, String(answer)];
};

export default () => startGcdGame(gameDescription, gameRoundData);
