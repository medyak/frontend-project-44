import readlineSync from 'readline-sync';

export default (gameTitle, gameInteract) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameTitle); // Title of a game

  let playRound = 0; // each game have 3 rounds always.
  while (playRound < 3) {
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
      playRound += 1;
    }

    if (playRound === 3) {
      console.log(`Congratulations, ${playerName}!`);
    }
  }
};
