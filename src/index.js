import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const questionNum = 3; // number of questions in the game

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);

  const userName = askName();
  let times = questionNum;
  while (times !== 0) {
    const gameState = game();
    console.log(`Question: ${car(gameState)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${cdr(gameState)}`) {
      console.log('Correct!');
      times -= 1;
    } else {
      console.log(`It's wrong answer. Let's try again, ${userName}!`);
      times = questionNum;
    }
  }
  if (times === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default runGame;
