import primeGame from '../index.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getRandomInt = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (n) => {
  let d = 2;
  while (d * d <= n && n % d !== 0) {
    d += 1;
  }
  return d * d > n ? 'yes' : 'no'; // yes is prime
};

const gameInteract = () => {
  const getNumber = getRandomInt(1, 20); // get a number to the prime test
  const calculatedAnswer = isPrime(getNumber);

  return [getNumber, calculatedAnswer];
};

export default () => primeGame(gameTitle, gameInteract);
