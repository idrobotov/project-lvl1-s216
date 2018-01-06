import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const findProgressionMember = (startNum, step, n) => {
  if (n > 1) {
    return startNum + (step * (n - 1));
  }
  return startNum;
};

const generateProgression = (startNum, step, hidedIndex, n) => {
  let progression = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === hidedIndex) {
      progression += '.. ';
    } else {
      progression += `${findProgressionMember(startNum, step, i)} `;
    }
  }

  return progression;
};

const progressionGame = () => {
  const description = 'What number is missing in this progression?';

  const gameData = () => {
    const startNum = getRandomInt(1, 1000);
    const step = getRandomInt(1, 20);
    const n = 10;
    const hidedIndex = getRandomInt(1, n);

    const answer = findProgressionMember(startNum, step, hidedIndex);
    const question = generateProgression(startNum, step, hidedIndex, n);
    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default progressionGame;
