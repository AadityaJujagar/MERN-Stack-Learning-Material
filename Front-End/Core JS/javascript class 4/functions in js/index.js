// function declaration methods
// hoinsting happens here by JS engine
let callFunc = printFunc();
function printFunc() {
  console.log("function called\n");
}

// named function assignment
let funcAssigned1 = function funcDeclared() {
  console.log("function assigned and called\n");
};
funcAssigned1();

let funcAssigned2 = funcAssigned1;
funcAssigned2();

// anonymous function assignment
let funcAssigned3 = function () {
  console.log("function assigned and called\n");
};
funcAssigned3();

// multiple arguments at a time, we get object in console
function funcDeclared(a, b) {
  console.log(arguments);
}
let funcAssigned4 = funcDeclared(1, 2, 3, 4, 5, 6);

// rest operator
function sum(a, ...args) {
  // stored as array
  console.log(a, args);
}
sum(1, 2, 3, 4, 5, 6);

// default parameters
function SI(p, r = 40, t = 60) {
  return (p * r * t) / 100;
}
console.log(SI(10, 20, undefined));
