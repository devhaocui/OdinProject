const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
};

const sum = (arr) => {

  let total = arr.reduce((a, b) => a + b, 0);
  return total
};

const multiply = (arr) => {
  return arr.reduce((a, b) => a * b, 1)
};

const power = (a, b) => {
  return a ** b
};

const factorial = (num) => {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

