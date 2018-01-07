import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  let divisor = 2;
  while (divisor < num) {
    if (num % divisor === 0) {
      return false;
    }
    divisor += 1;
  }
  return true;
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
