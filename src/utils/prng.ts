import { mulberry32 } from './mulberry32';

const today = new Date();
const todayNumber = parseInt(`${today.getFullYear()}${today.getDate()}${today.getMonth}`);
let predictableOffsetSeed = 358;

// Using the offsetSeed and the current date, we create a bit of variance so
// daily order of true/false is not simply rotating by once day.
function createPredictableInputNumber(): number {
  predictableOffsetSeed++;
  let inputNumber = todayNumber + predictableOffsetSeed;
  inputNumber = inputNumber - (today.getMonth() + 1) * today.getDate();
  return inputNumber - today.getFullYear() / today.getDate();
}

export function predictableRandomNumber() {
  const inputNumber = createPredictableInputNumber();
  const prngResult = mulberry32(inputNumber);
  console.log(prngResult);
  return prngResult;
}
