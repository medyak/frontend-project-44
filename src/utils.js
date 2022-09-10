/* eslint-disable import/prefer-default-export */
const getRandomValue = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

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

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

export { getRandomValue, calculateValues, isPrime };
