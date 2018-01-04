import { cons, car, cdr } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';
import getRandomOperator from '../getRandomOperator';
import calcOperations from '../calcOperations';

const calcGame = () => {
  const description = 'What is the result of the expression?\n';
  const calculate = () => {
    const pair = cons(getRandomInt(1, 50), getRandomInt(1, 50));
    const operator = getRandomOperator();
    const expected = calcOperations([car(pair), cdr(pair)], operator);
    const question = `${car(pair)} ${operator} ${cdr(pair)}`;
    return cons(question, expected);
  };

  runGame(description, calculate);
};

export default calcGame;
