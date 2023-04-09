// 2. Write an ES6 function which takes an array of digits and return the sum of all digits present at odd indices. Avoid using in-built methods.

export const sumDigitsAtOddIndices = (array) => {
  // Your ES6 code here
  // return array.reduce((sum, currValue, index) => {
  //   return index % 2 !== 0 ? sum + currValue : sum;
  // }, 0);
  let oddSum = 0;
  for (let i = 0; i < array.length; i++) {
    oddSum = i % 2 !== 0 ? oddSum + array[i] : oddSum;
  }
  return oddSum;
};
console.log(sumDigitsAtOddIndices([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 20
