const reverseString = function (string) {
  let split = string.split("");
  let result = "";
  for (let char of split) {
    result = char + result;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
