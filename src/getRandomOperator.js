/** This functions returns random operation: "+", "-" or "*"  */
import getRandomInt from './getRandomInt';

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

export default getRandomOperator;
