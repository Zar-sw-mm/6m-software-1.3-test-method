const addFunc = (a, b, c) => {
  return a + b + c;
};

const isDivisibleBy5 = (num1) => {
  if (num1 % 5 == 0) {
    return true;
  } else {
    return false;
  }
};

const multiPly = (a, b) => {
  return a * b;
};

module.exports = {
  addFunc,
  isDivisibleBy5,
  multiPly,
};
