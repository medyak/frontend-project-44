/* eslint-disable import/prefer-default-export */
/* eslint object-curly-newline: ["error", "never"] */

const getRandomValue = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

const getProgressionArray = (progressionLength, progressionFirstNumber, progressionStep) => {
  let nextElement = progressionFirstNumber;
  const progression = [nextElement];

  for (let i = 1; i < progressionLength; i += 1) {
    nextElement += progressionStep;
    progression.push(nextElement);
  }

  return progression;
};

export { getRandomValue, isEven, getProgressionArray };
