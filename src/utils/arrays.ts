import { predictableRandomNumber } from './prng';

/* Randomize array in-place using Durstenfeld shuffle algorithm */
export function shuffledArray(array: any[]) {
  const workingArray = [...array];
  for (var i = workingArray.length - 1; i > 0; i--) {
    const j = Math.floor(predictableRandomNumber() * (i + 1));
    const temp = workingArray[i];
    workingArray[i] = workingArray[j];
    workingArray[j] = temp;
  }
  return workingArray;
}

export function randomHalvesOfList(list: any[]): {
  listOne: any[];
  listTwo: any[];
} {
  const roughHalf = list.length / 2;
  const giveMoreIfNotEqual = predictableRandomNumber() >= 0.5;
  const halfNumber = giveMoreIfNotEqual ? Math.ceil(roughHalf) : Math.floor(roughHalf);
  const listOne = list.slice(0, halfNumber).sort();
  const listTwo = list.slice(halfNumber, list.length).sort();
  return { listOne, listTwo };
}
