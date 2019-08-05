"use strict";

let findLongestWord = function(string) {
  let arrString = string.split(" ");

  let longestWord = null;
  let lengthWord = 0;

  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length >= lengthWord) {
      lengthWord = arrString[i].length;
      longestWord = arrString[i];
    }
  }

  return longestWord;
};

//another version

// function findLongestWord(string) {
//   let longestWord = string.split(" ").sort(function(a, b) {
//     return b.length - a.length;
//   })
//   return longestWord[0];
// }

console.log(findLongestWord("The quick fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
