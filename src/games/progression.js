import progressionGame from '../index.js';

const gameTitle = 'What number is missing in the progression?';
const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const progressionLength = getRandomInt(5, 10); // progression length

const getProgression = () => {
  const firstNumber = getRandomInt(); // 1st value
  const step = getRandomInt(1, 10); // progression step
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
  const progressionElementIndex = getRandomInt(0, progressionLength); // progression random element
  const calculatedResult = String(progression[progressionElementIndex]); // store the correct answer
  progression[progressionElementIndex] = '..'; // replace this element value to "secret"
  const progressionList = progression.join(' '); // convert the array to a string

  return [progressionList, calculatedResult];
};

export default () => progressionGame(gameTitle, gameInteract);
