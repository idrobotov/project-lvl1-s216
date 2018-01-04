import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const modCheck = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".\n';

  const even = () => {
    const num = getRandomInt(1, 20);
    const expected = (number) => {
      if (modCheck(number)) {
        return 'yes';
      }
      return 'no';
    };
    const question = `${num}`;
    return cons(question, expected(num));
  };

  runGame(description, even);
};

export default evenGame;
