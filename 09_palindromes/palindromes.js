const palindromes = function (str) {
  let stripped = str.toLowerCase().replace(/[^a-z]/g, "");
  return stripped === stripped.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
