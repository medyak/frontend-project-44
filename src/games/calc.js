import _ from 'lodash';
import getRandomNumber from './safebelt.js';

import calcGame from '../index.js';

const gameTitle = 'What is the result of the expression?';

const gameInteract = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = getRandomNumber(1, 20);
  const operandTwo = getRandomNumber(1, 20);
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
