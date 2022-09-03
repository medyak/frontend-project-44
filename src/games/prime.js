import primeGame from '../index.js';
import getRandomNumber from './safebelt.js';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/*
const isPrime = (n) => {
  let d = 2;
  while (d * d <= n && n % d !== 0) {
    d += 1;
  }
  return d * d > n ? 'yes' : 'no'; // yes is prime
};
*/
/*
well.. let's conform autotests about "1"
For a number to be called as a prime number,
it must have only two positive factors.
Now, for 1, the number of positive divisors or factors is only one i.e. 1 itself.
So, number one is not a prime number.
Note: 2 is the smallest number that satisfies the definition of prime numbers.
*/
const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return 'no';
  }
  return 'yes';
};

const gameInteract = () => {
  const getNumber = getRandomNumber(1, 20); // get a number to the prime test
  const calculatedAnswer = isPrime(getNumber);

  return [getNumber, calculatedAnswer];
};

export default () => primeGame(gameTitle, gameInteract);
