import startPrimeGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};
const gameRoundData = () => {
  const getNumber = getRandomValue(1, 20);
  const calculatedAnswer = isPrime(getNumber) === true ? 'yes' : 'no';

  return [getNumber, calculatedAnswer];
};

export default () => startPrimeGame(gameDescription, gameRoundData);
