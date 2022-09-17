import startEvenGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (n) => n % 2 === 0;

const getRoundData = () => {
  const question = getRandomValue();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startEvenGame(gameDescription, getRoundData);
