"use strict";

let formatString = string => {
  let checkLength = 40;
  let newString;

  if (string.length < checkLength) {
    return string;
  } else {
    newString = string.substring(0, 40) + "...";
    return string.substring(0, 40) + "...";
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
