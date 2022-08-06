const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  if (args) {
    return args.reduce((a, b) => a + b, 0);
  }
  return 0;
};

const multiply = function (args) {
  if (args) {
    return args.reduce((a, b) => a * b, 1);
  }
  return 0;
};

const power = function (n, pow) {
  if (pow <= 1) {
    return n;
  }
  return n * power(n, pow - 1);
};

const factorial = function (n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
