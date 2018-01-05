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
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const gameData = () => {
    const num = getRandomInt(1, 20);
    const answer = (number) => {
      if (modCheck(number)) {
        return 'yes';
      }
      return 'no';
    };
    const question = `${num}`;
    return cons(question, answer(num));
  };

  runGame(description, gameData);
};

export default evenGame;
