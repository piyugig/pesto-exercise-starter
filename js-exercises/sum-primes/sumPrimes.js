/*
Sieve of Eratosthenes
*/
function getPrime(primeUpto) {
  const primeArray = [false, false];
  const loopLimit = Math.sqrt(primeUpto);

  for (let i = 2; i <= loopLimit; i += 1) {
    let count = 2;
    let j = i * count;
    while (j <= primeUpto) {
      primeArray[j] = false;
      count += 1;
      j = i * count;
    }
  }
  for (let i = primeArray.length; i < primeUpto + 1; i += 1) {
    primeArray.push(undefined);
  }
  return primeArray.entries();
}

function sumPrimes(inputLimit) {
  try {
    if ((typeof inputLimit !== 'number') || inputLimit < 0) {
      throw new Error(`Expected positive number, got ${typeof inputLimit} with value: ${inputLimit}`);
    }
    const primeArray = getPrime(inputLimit);
    let sumPrime = 0;
    for (const [i, prime] of primeArray) {
      if (prime === undefined) {
        sumPrime += i;
      }
    }
    return sumPrime;
  } catch (err) {
    return err;
  }
}

export {
  sumPrimes,
};
