function sortArray(inputIntegerArray) {
  return inputIntegerArray.sort((a, b) => a - b);
}

function sumAll(rangeArray) {
  try {
    for (const inputvalue of rangeArray) {
      if (typeof inputvalue !== 'number') {
        throw new Error(`Expected number got ${typeof inputvalue}`);
      }
    }
    sortArray(rangeArray);
    let sum = 0;
    for (let i = rangeArray[0]; i <= rangeArray[1]; i += 1) {
      sum += i;
    }
    return sum;
  } catch (err) {
    return err;
  }
}

export { sumAll };
