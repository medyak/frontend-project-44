import _ from 'lodash';

import calcGame from '../index.js';

const gameTitle = 'What is the result of the expression?';

const gameInteract = () => {
  const operator = _.sample(['+', '-', '*']);
  const operandOne = Math.ceil((Math.random()) * 10);
  const operandTwo = Math.ceil((Math.random()) * 10);
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
