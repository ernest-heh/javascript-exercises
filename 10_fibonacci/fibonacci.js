const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  let prev = 0;
  let curr = 1;
  for (let i = 1; i < num; i++) {
    const temp = curr;
    curr = prev + curr;
    prev = temp;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
