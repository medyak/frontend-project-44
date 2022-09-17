/* eslint-disable max-len */
import startProgressionGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (length, firstNumber, step) => {
  let nextElement = firstNumber;
  const progression = [nextElement];

  for (let i = 1; i < length; i += 1) {
    nextElement += step;
    progression.push(nextElement);
  }

  return progression;
};

const getRoundData = () => {
  const progressionLength = getRandomValue(5, 15);
  const progressionFirstNumber = getRandomValue();
  const progressionStep = getRandomValue(2, 5);
  const aProgression = getProgression(progressionLength, progressionFirstNumber, progressionStep);

  const ItemIdToHide = getRandomValue(1, progressionLength - 1);
  const answer = String(aProgression[ItemIdToHide]);
  aProgression[ItemIdToHide] = '..';
  const question = aProgression.join(' ');

  return [question, answer];
};

export default () => startProgressionGame(gameDescription, getRoundData);
