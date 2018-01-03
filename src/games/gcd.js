import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import askName from '../';
import getRandomInt from '../getRandomInt';
import getGcd from '../getGcd';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');

const userName = askName();

const questionNum = 3; // number of questions in the game

const gcdGame = () => {
  let times = questionNum;

  while (times !== 0) {
    const pair = cons(getRandomInt(1, 100), getRandomInt(1, 100));
    const expected = getGcd(car(pair), cdr(pair));

    console.log(`Question: ${car(pair)} ${cdr(pair)}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === `${expected}`) {
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

export default gcdGame;
