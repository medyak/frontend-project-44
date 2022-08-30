import evenGame from '../index.js';

const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameInteract = () => {
  const randomNumber = Math.ceil((Math.random()) * 100); // make a  random number
  const calculatedResult = randomNumber % 2 === 0 ? 'yes' : 'no'; // even / odd check
  return [randomNumber, calculatedResult];
};

export default () => evenGame(gameTitle, gameInteract);