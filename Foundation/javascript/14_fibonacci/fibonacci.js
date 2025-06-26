const fibonacci = (num) => {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;
  if (num == 1) return 1;
  let solution = fibonacci(num - 2) + fibonacci(num - 1);
  return solution
};

module.exports = fibonacci;
