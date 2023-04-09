// 4. Write an ES6 function that takes an array of strings and returns the shortest string in the array.

export const getShortestString = (string) => {
  // Your ES6 code here
let str=string[0];
for(let i=1;i< string.length;i++){
  str.length > string[i].length ? str=string[i] : str
}
return str
};

console.log(
  getShortestString(["primary", "secondary", "education", "exams",])
); // exams
