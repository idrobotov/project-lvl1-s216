// Returns greatest common divisor
const getGcd = (a, b) => (b ? getGcd(b, a % b) : a);

export default getGcd;
