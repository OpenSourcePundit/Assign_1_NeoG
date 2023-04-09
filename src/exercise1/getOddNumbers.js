// 1. Write an ES6 function that takes an array of numbers and returns a new array with only the odd numbers.

export const getOddNumbers = (array) => {
  // Your ES6 code here
  let arrayNew = [];
  for (let i = 0; i < array.length; i++) {
    array[i] % 2 != 0 ? arrayNew.push(array[i]) : array;
  }
  return array.filter((num) => num % 2 !== 0);
};

console.log(getOddNumbers([2, 6, 7, 3, 8, 9, 13])); // [7, 3, 9, 13]
