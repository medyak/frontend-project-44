import _ from 'lodash';

import startCalcGame from '../index.js';
import { getRandomValue, calculateValues } from '../utils.js';

const gameTitle = 'What is the result of the expression?';

const gameInteract = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = getRandomValue(1, 20);
  const operandTwo = getRandomValue(1, 20);
  const roundQuestion = `${operandOne} ${operator} ${operandTwo}`;
  const calculatedResult = calculateValues(operandOne, operandTwo, operator);

  return [roundQuestion, String(calculatedResult)];
};

export default () => startCalcGame(gameTitle, gameInteract);
