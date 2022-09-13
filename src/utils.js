/* eslint-disable import/prefer-default-export */
/* eslint object-curly-newline: ["error", "never"] */

const getRandomValue = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (n) => n % 2 === 0;

export { getRandomValue, isEven };
