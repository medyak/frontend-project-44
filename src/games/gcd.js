import startGcdGame from '../index.js';
import { getRandomValue, getGCD } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gameRoundData = () => {
  const firstNumber = getRandomValue(1, 15);
  const secondNumber = getRandomValue(1, 15);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGCD(firstNumber, secondNumber);

  return [question, String(answer)];
};

export default () => startGcdGame(gameDescription, gameRoundData);
