import { cons, car, cdr } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

/** This function returns greatest common divisor  */
const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.\n';

  const gcdCalc = () => {
    const pair = cons(getRandomInt(1, 100), getRandomInt(1, 100));
    const expected = getGcd(car(pair), cdr(pair));
    const question = `${car(pair)} ${cdr(pair)}`;
    return cons(question, expected);
  };

  runGame(description, gcdCalc);
};

export default gcdGame;
