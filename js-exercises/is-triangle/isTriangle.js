function isTriangle(...args) {
  try {
    for (const element of args) {
      if (typeof element !== 'number') {
        throw new Error(`Expected number, got ${element} of type ${typeof element}`);
      }
    }
    const [line1, line2, line3] = [...args];
    return line1 + line2 > line3 && line2 + line3 > line1 && line3 + line1 > line2;
  } catch (err) {
    return err;
  }
}

export {
  isTriangle,
};
