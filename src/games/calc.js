import _ from 'lodash';

import calcGame from '../index.js';
import getRandomValue from '../utils.js';

const gameTitle = 'What is the result of the expression?';

const gameInteract = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = getRandomValue(1, 20);
  const operandTwo = getRandomValue(1, 20);
  const roundQuestion = `${operandOne} ${operator} ${operandTwo}`;

  let calculatedResult = 0;

  switch (operator) {
    case '+':
      calculatedResult = operandOne + operandTwo;
      break;

    case '-':
      calculatedResult = operandOne - operandTwo;
      break;

    case '*':
      calculatedResult = operandOne * operandTwo;
      break;

    default:
      break;
  }
  return [roundQuestion, String(calculatedResult)];
};

export default () => calcGame(gameTitle, gameInteract);
