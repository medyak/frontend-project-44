import _ from 'lodash';

import startCalcGame from '../index.js';
import { getRandomValue } from '../utils.js';

const gameDescription = 'What is the result of the expression?';

const calculateValues = (operandOne, operandTwo, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    default:
      throw new Error('ERR: Uknown operation sign received');
  }
  return result;
};

const gameRoundData = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = getRandomValue(1, 20);
  const operandTwo = getRandomValue(1, 20);

  const question = `${operandOne} ${operator} ${operandTwo}`;
  const answer = calculateValues(operandOne, operandTwo, operator);

  return [question, String(answer)];
};

export default () => startCalcGame(gameDescription, gameRoundData);
