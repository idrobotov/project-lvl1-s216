import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

/** This function returns greatest common divisor  */
const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const gameData = () => {
    const num1 = getRandomInt(1, 100);
    const num2 = getRandomInt(1, 100);

    const answer = getGcd(num1, num2);
    const question = `${num1} ${num2}`;
    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default gcdGame;
