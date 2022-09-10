import startEvenGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameRoundData = () => {
  const randomNumber = getRandomValue();
  const calculatedResult = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [randomNumber, calculatedResult];
};

export default () => startEvenGame(gameDescription, gameRoundData);
