import startPrimeGame from '../index.js';
import getRandomValue from '../utils.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return 'no';
  }
  return 'yes';
};

const gameInteract = () => {
  const getNumber = getRandomValue(1, 20); // get a number to the prime test
  const calculatedAnswer = isPrime(getNumber);

  return [getNumber, calculatedAnswer];
};

export default () => startPrimeGame(gameTitle, gameInteract);
