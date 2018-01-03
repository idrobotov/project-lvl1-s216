import { cons, car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import askName from './';
import getRandomInt from './getRandomInt';
import getRandomOperator from './getRandomOperator';
import calcOperations from './calcOperations';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const userName = askName();

const questionNum = 3; // number of questions in the game

const calcGame = () => {
  let times = questionNum;

  while (times !== 0) {
    const pair = cons(getRandomInt(1, 50), getRandomInt(1, 50));
    const operator = getRandomOperator();
    const expected = calcOperations([car(pair), cdr(pair)], operator);

    console.log(`Question: ${car(pair)} ${operator} ${cdr(pair)}`);
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

export default calcGame;
