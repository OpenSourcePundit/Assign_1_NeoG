// 3. Write an ES6 function to reverse a string in JavaScript without using in-built methods.

export const reverseString = (string) => {
  // Your ES6 code here
  var newStr = "";
  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
};

console.log(reverseString("neoG Camp")); // pmaC Goen
