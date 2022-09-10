import startProgressionGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const progressionLength = getRandomValue(5, 15);

const getProgression = () => {
  const firstNumber = getRandomValue();
  const step = getRandomValue(2, 5);
  const progression = [firstNumber];

  let nextElement = firstNumber;
  for (let i = 1; i < progressionLength; i += 1) {
    nextElement += step;
    progression.push(nextElement);
  }

  return progression;
};

const gameRoundData = () => {
  const progression = getProgression();
  const progressionElementIndex = getRandomValue(1, progressionLength - 1);
  const answer = String(progression[progressionElementIndex]);
  progression[progressionElementIndex] = '..'; // replace this element value to "secret"
  const question = progression.join(' ');

  return [question, answer];
};

export default () => startProgressionGame(gameDescription, gameRoundData);
