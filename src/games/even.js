import readlineSync from 'readline-sync';
import askName from '../';
import modCheck from '../modCheck';
import getRandomInt from '../getRandomInt';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = askName();

const questionNum = 3; // number of questions in the game

const evenGame = () => {
  let times = questionNum;
  while (times !== 0) {
    const num = getRandomInt(1, 20);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((userAnswer === 'yes' && modCheck(num)) || (userAnswer === 'no' && !modCheck(num))) {
      console.log('Correct!');
      times -= 1;
    } else {
      if (userAnswer === 'yes') { console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\n'); }
      if (userAnswer === 'no') { console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.\n'); }
      console.log(`Let's try again, ${userName}!`);
      times = questionNum;
    }
  }
  if (times === 0) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenGame;
