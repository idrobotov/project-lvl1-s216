import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomInt from '../getRandomInt';

const generateProgression = (startNum, step, hidedIndex, n) => {
  let start = startNum;
  const progression = [];

  for (let i = 0; i < n; i += 1) {
    if (i === hidedIndex) {
      progression.push('..');
      start += step;
    }

    progression.push(start);
    start += step;
  }

  return progression.join(' ');
};

const progressionGame = () => {
  const description = 'What number is missing in this progression?';

  const gameData = () => {
    const startNum = getRandomInt(1, 1000);
    const step = getRandomInt(1, 20);
    const n = 10;
    const hidedIndex = getRandomInt(0, n - 1);

    const progression = generateProgression(startNum, step, hidedIndex, n);
    const answer = startNum + (step * hidedIndex);

    const question = `${progression}`;

    return cons(question, answer);
  };

  runGame(description, gameData);
};

export default progressionGame;
