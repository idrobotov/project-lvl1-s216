// Returns a random integer between min (included) and max (included)
const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export default getRandomInt;
