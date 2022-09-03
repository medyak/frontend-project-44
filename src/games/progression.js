import progressionGame from '../index.js';
import getRandomNumber from './safebelt.js';

const gameTitle = 'What number is missing in the progression?';

const progressionLength = getRandomNumber(5, 15); // progression length

const getProgression = () => {
  const firstNumber = getRandomNumber(); // 1st value
  const step = getRandomNumber(2, 5); // progression step
  const progression = [firstNumber]; // progression values array

  let nextElement = firstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    nextElement += step; // get new element of progression
    progression.push(nextElement);
  }

  return progression;
};

const gameInteract = () => {
  const progression = getProgression(); // current progression
  const progressionElementIndex = getRandomNumber(0, progressionLength); // progression random elem
  const calculatedResult = String(progression[progressionElementIndex]); // store the correct answer
  progression[progressionElementIndex] = '..'; // replace this element value to "secret"
  const progressionList = progression.join(' '); // convert the array to a string

  return [progressionList, calculatedResult];
};

export default () => progressionGame(gameTitle, gameInteract);
