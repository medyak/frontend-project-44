import startProgressionGame from '../index.js';
import getRandomValue from '../utils.js';

const gameTitle = 'What number is missing in the progression?';

const progressionLength = getRandomValue(5, 15); // progression length

const getProgression = () => {
  const firstNumber = getRandomValue(); // 1st value
  const step = getRandomValue(2, 5); // progression step
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
  const progressionElementIndex = getRandomValue(1, progressionLength - 1); // progression elem
  const calculatedResult = String(progression[progressionElementIndex]); // store the correct answer
  progression[progressionElementIndex] = '..'; // replace this element value to "secret"
  const progressionList = progression.join(' '); // convert the array to a string

  return [progressionList, calculatedResult];
};

export default () => startProgressionGame(gameTitle, gameInteract);
