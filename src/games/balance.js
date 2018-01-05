import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const getBalance = (num) => {
  const digits = num.toString().split('').sort().map(digit => Number(digit));

  let result = [];
  result = digits;

  while ((result[result.length - 1] - result[0]) > 1) {
    result[0] += 1;
    result[result.length - 1] -= 1;
    result.sort();
  }

  return result.join('');
};

const balanceGame = () => {
  const description = 'Balance the given number.';

  const gameData = () => {
    const num = getRandomInt(1, 5000);
    const answer = getBalance(num);

    console.log(`Correct answer is: ${getBalance(num)}`); // debug

    const question = `${num}`;

    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default balanceGame;
