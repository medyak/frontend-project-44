import startEvenGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRoundData = () => {
  const question = getRandomValue();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

export default () => startEvenGame(gameDescription, gameRoundData);
