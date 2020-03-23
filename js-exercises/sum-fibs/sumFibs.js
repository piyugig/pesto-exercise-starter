function* getFibs() {
  const currentFib = [1, 1];
  let fib;
  for (fib of currentFib) {
    yield fib;
  }
  while (true) {
    fib = currentFib.reduce((acc, value) => acc + value, 0);
    currentFib.shift();
    currentFib.push(fib);
    yield fib;
  }
}

function sumFibs(integerLimit) {
  try {
    if ((typeof integerLimit !== 'number') && integerLimit < 0) {
      throw new Error(`Expected positive number, got ${typeof integerLimit} with value: ${integerLimit}`);
    }
    let fib = 0;
    let oddFibSum = 0;
    const nextFib = getFibs();
    for (fib of nextFib) {
      if (fib > integerLimit) {
        break;
      }
      oddFibSum = fib % 2 === 0 ? oddFibSum : oddFibSum + fib;
    }
    return oddFibSum;
  } catch (err) {
    return err;
  }
}

export {
  sumFibs,
};
