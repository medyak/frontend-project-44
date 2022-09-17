import readlineSync from 'readline-sync';

export default (gameDescription, getRoundData) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  const playRounds = 3;
  let currentRound = 0;

  while (currentRound < playRounds) {
    const [question, answer] = getRoundData();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer !== answer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }

    if (playerAnswer === answer) {
      console.log('Correct!');
      currentRound += 1;
    }

    if (currentRound === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
