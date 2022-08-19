import readlineSync from 'readline-sync';

const getPlayerName = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?: ');
  return console.log(`Hello, ${playerName}!`);
};

export { getPlayerName };