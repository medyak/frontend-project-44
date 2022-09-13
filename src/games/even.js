import startEvenGame from '../index.js';
import { getRandomValue, isEven } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRoundData = () => {
  const question = getRandomValue();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => startEvenGame(gameDescription, gameRoundData);
