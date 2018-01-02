import readlineSync from 'readline-sync';
import askName from './';
import modCheck from './modCheck';
import getRandomInt from './getRandomInt';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = askName();

const questionNum = 3; // number of questions in the game
let times = questionNum;

const evenGame = () => {
  const num = getRandomInt(1, 20);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if ((userAnswer === 'yes' && modCheck(num)) || (userAnswer === 'no' && !modCheck(num))) {
    console.log('Correct!');
  } else {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n');
    console.log(`Let's try again, ${userName}!`);
    times = questionNum;
  }
};

while (times !== 0) {
  evenGame();
  times -= 1;
}
if (times === 0) {
  console.log(`Congratulations, ${userName}!`);
}