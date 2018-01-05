import { cons, car, cdr } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const operations = {
  '+': (operand1, operand2) => (operand1 + operand2),
  '-': (operand1, operand2) => (operand1 - operand2),
  '*': (operand1, operand2) => (operand1 * operand2),
};

const calcOperations = (list, operator) => list.reduce(operations[operator]);

/** This functions returns random operation: "+", "-" or "*"  */
const getRandomOperator = () => {
  let result = '';
  const num = getRandomInt(1, 3);

  switch (num) {
    case 1:
      result = '+';
      break;
    case 2:
      result = '-';
      break;
    case 3:
      result = '*';
      break;
    default:
      result = '+';
  }

  return result;
};

const calcGame = () => {
  const description = 'What is the result of the expression?\n';
  const gameData = () => {
    const pair = cons(getRandomInt(1, 50), getRandomInt(1, 50));
    const operator = getRandomOperator();
    const answer = calcOperations([car(pair), cdr(pair)], operator);
    const question = `${car(pair)} ${operator} ${cdr(pair)}`;
    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default calcGame;
