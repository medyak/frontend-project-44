import _ from 'lodash';

import startCalcGame from '../index.js';
import { getRandomValue, calculateValues } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const gameRoundData = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = getRandomValue(1, 20);
  const operandTwo = getRandomValue(1, 20);

  const question = `${operandOne} ${operator} ${operandTwo}`;
  const answer = calculateValues(operandOne, operandTwo, operator);

  return [question, String(answer)];
};

export default () => startCalcGame(gameDescription, gameRoundData);
