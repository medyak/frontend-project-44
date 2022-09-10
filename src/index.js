import readlineSync from 'readline-sync';

export default (gameDescription, gameRoundData) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  const playRounds = 3;
  let currentRound = 0;

  while (currentRound < playRounds) {
    const [question, calculatedResult] = gameRoundData();

    console.log(`Question: ${question}`);

    const playerAnswer = readlineSync.question('Answer: ');

    if (playerAnswer !== calculatedResult) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${calculatedResult}'.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }

    if (playerAnswer === calculatedResult) {
      console.log('Correct!');
      currentRound += 1;
    }

    if (currentRound === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
