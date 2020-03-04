function sort(inputIntegerArray) {
  return inputIntegerArray.sort((a, b) => a - b);
}

function sumAll(rangeArray) {
  sort(rangeArray);
  let sum = 0;
  for (let i = rangeArray[0]; i <= rangeArray[1]; i += 1) {
    sum += i;
  }
  return sum;
}

export { sumAll };
