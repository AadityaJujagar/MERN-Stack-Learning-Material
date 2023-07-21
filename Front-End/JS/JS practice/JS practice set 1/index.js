// ## Topics covered:
// - Variables, data types, and operators
// - Conditional statements and loops

// Write a function that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log("sum is", sum(2, 3));

// Write a function that takes a string as an argument and returns its length.
function stringLength(stringEntered) {
  return stringEntered.length;
}
console.log(stringLength("aaditya jujagar"));

// Write a program that takes two numbers and displays their sum, difference, product, and quotient.
function calc(num1, num2) {
  let sum = num1 + num2;
  console.log("sum is", sum);
  let sub = num1 - num2;
  console.log("sub is", sub);
  let pro = num1 * num2;
  console.log("product is", pro);
  let div = num1 / num2;
  console.log("division is", div);
}
calc(5, 4);

// Write a function that takes two numbers as arguments and returns the larger number.
function largest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    num2;
  } else {
    return "both are equal";
  }
}
console.log(largest(65, 56));

// Write a program that displays a string in reverse order.
function strRev(str) {
  let strSpl = str.split("");
  let strrev = strSpl.reverse();
  let strJoin = strrev.join("");
  return strJoin;
}
console.log(strRev("aaditya jujagar"));

// Write a program that takes a number and checks whether it is positive, negative, or zero.
function number(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(number(0));

// Write a program that takes a number and prints the multiplication table for that number.
function table(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i);
  }
}
table(10);

// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.
function sumUpto(number) {
  let sum = 0;
  for (let upto = 1; upto <= number; upto++) {
    sum = sum + upto;
  }
  return sum;
}
console.log(sumUpto(7));

// Write a program that takes a string and prints out the number of vowels in the string.
function vowelsCount(str) {
  let count = 0;
  let vowel = "aeiouAEIOU";
  for (let a = 0; a < str.length; a++) {
    if (vowel.includes(str[a])) {
      count++;
    }
  }
  return count;
}
console.log(vowelsCount("Hello World!"));

// Write a function that takes two arrays of integers as arguments
// And returns an array of the common elements in both arrays, without any duplicates.
// The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.
function commonEle(arr1, arr2) {
  let commArr = [];
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      if (commArr.includes(arr2[i])) {
        continue;
      } else {
        commArr.push(arr2[i]);
      }
    }
  }
  return commArr;
}
console.log(
  commonEle(
    [1, 2, 2, 3, 3, 3, 5, 5, 5, 7],
    [1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 6, 6]
  )
);
