/* eslint-disable max-len */
import startProgressionGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgressionArray = (length, firstNumber, step) => {
  let nextElement = firstNumber;
  const progression = [nextElement];

  for (let i = 1; i < length; i += 1) {
    nextElement += step;
    progression.push(nextElement);
  }

  return progression;
};

const gameRoundData = () => {
  const progressionLength = getRandomValue(5, 15);
  const progressionFirstNumber = getRandomValue();
  const progressionStep = getRandomValue(2, 5);
  const progressionArray = getProgressionArray(progressionLength, progressionFirstNumber, progressionStep);

  const ItemIdToHide = getRandomValue(1, progressionLength - 1);
  const answer = String(progressionArray[ItemIdToHide]);
  progressionArray[ItemIdToHide] = '..';
  const question = progressionArray.join(' ');

  return [question, answer];
};

export default () => startProgressionGame(gameDescription, gameRoundData);
