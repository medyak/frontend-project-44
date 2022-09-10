/* eslint-disable import/prefer-default-export */
/* eslint object-curly-newline: ["error", "never"] */

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

const getGCD = (firstNumber, secondNumber) => {
  let first = firstNumber;
  let second = secondNumber;

  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return first + second;
};

const getProgressionArray = (progressionLength, progressionFirstNumber, progressionStep) => {
  let nextElement = progressionFirstNumber;
  const progression = [nextElement];

  for (let i = 1; i < progressionLength; i += 1) {
    nextElement += progressionStep;
    progression.push(nextElement);
  }

  return progression;
};

export { getRandomValue, calculateValues, isPrime, getGCD, getProgressionArray };
