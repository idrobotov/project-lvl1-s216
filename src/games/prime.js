import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (num % divisor === 0) {
      return false;
    }
    if (divisor < num / 2) {
      return iter(divisor + 1);
    }
    return true;
  };

  return iter(2);
};

const primeGame = () => {
  const description = '';

  const gameData = () => {
    const num = getRandomInt(1, 100);
    const answer = (isPrime(num) ? 'yes' : 'no');
    const question = `Is this number prime? Type 'yes' or 'no': ${num}`;
    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default primeGame;
