import startPrimeGame from '../index.js';
import { getRandomValue, isPrime } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameRoundData = () => {
  const question = getRandomValue(1, 20);
  const answer = isPrime(question) === true ? 'yes' : 'no';

  return [question, answer];
};

export default () => startPrimeGame(gameDescription, gameRoundData);
