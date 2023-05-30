const sumAll = function (start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

// const sumAll = function (start, end) {
//   let arr = [start, end].sort();

//   if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
//   if (start < 0 || end < 0) return "ERROR";

//   let sum = 0;
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     sum += i;
//   }
//   return sum;
// };
