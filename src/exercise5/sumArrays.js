// 5. Write an ES6 function that takes two array of numbers of equal length and returns a new array with the sum of each corresponding element in the two arrays. Avoid using in-built methods.

export const sumArrays = (first, second) => {
  // Your ES6 code here
  let sum = [];
  for (let i = 0; i < first.length; i++) {
    sum.push(first[i] + second[i]);
  }
  return sum;
};

console.log(sumArrays([1, 2, 3, 4], [1, 2, 3, 5])); // [2, 4, 6, 9]
