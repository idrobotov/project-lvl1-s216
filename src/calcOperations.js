const operations = {
  '+': (operand1, operand2) => (operand1 + operand2),
  '-': (operand1, operand2) => (operand1 - operand2),
  '*': (operand1, operand2) => (operand1 * operand2),
};

const accumulate = (list, operator) => list.reduce(operations[operator]);

export default accumulate;
