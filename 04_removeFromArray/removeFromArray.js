const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;

// const removeFromArray = function (arr, ...args) {
//   const result = [];

//   arr.forEach((item) => {
//     if (!args.includes(item)) {
//       result.push(item);
//     }
//   });

//   return result;
// };
