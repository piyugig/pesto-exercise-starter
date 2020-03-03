function duplicateLetters(args) {
  const hash = new Map();
  for (const dupChar of args) {
    if (hash.get(dupChar) === undefined) {
      hash.set(dupChar, 1);
    } else {
      const value = hash.get(dupChar) + 1;
      hash.set(dupChar, value);
    }
  }
  const max = Math.max(...hash.values());
  return max > 1 ? max : false;
}
export { duplicateLetters };
