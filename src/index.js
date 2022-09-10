import readlineSync from 'readline-sync';

export default (gameTitle, gameInteract) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameTitle); // Title of a game

  const playRounds = 3; // each game have 3 rounds
  let currentRound = 0;

  while (currentRound < playRounds) {
    const [question, calculatedResult] = gameInteract();

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
