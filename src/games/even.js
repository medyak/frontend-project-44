import startEvenGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const prepareGameData = () => {
  const randomNumber = getRandomValue();
  const calculatedResult = randomNumber % 2 === 0 ? 'yes' : 'no'; // even / odd check
  return [randomNumber, calculatedResult];
};

export default () => startEvenGame(gameDescription, prepareGameData);
