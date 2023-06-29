// can also be edited while being offline, >>>node index.js
// either in terminal or in port console

// .log() is used of printing the string inside
console.log("opened in integrated terminal");

// var and let as global scopes and local scopes
var a = "var at global scope";
let b = "let at global scope";
if (1) {
  var a = "var inside a code block";
  let b = "let inside a code block";
  console.log(a);
  console.log(b);
}
// let retains its original value, works in particular code blocks
console.log(a);
console.log(b);

// constants
// cant use a reserved keyword
// has to be a meaningful name
// e.g ageOfMe, camelCase
const c = 22 / 7;
console.log(c);
// const c = 3.14; cannot be redeclared

// dynamic change in variable value
let theName = "lmao";
console.log(theName);

theName = false;
console.log(theName);
