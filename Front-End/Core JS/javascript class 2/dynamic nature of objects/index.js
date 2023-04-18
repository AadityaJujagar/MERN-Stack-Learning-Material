function Parameters() {
  this.len = prompt();
  this.bre = prompt();
  this.newParameter = function () {
    console.log("all parameters printed");
  };
}
let callParameters = new Parameters();
// addition of a new property
callParameters.hei = prompt();
// deleting a property, in console
delete callParameters.bre;
callParameters.newParameter();
// use Parameters.constructor; in browser console

// primitive type: number, string, boolean, null, undefined
// reference type (objects): functions, arrays, objects
function valueFunc() {
  let a = 3;
  let b = a;
  a++;
  console.log(a);
  console.log(b);
  // addresses are being accessed to change the value
  let c = { value: 3 };
  let d = c;
  c.value++;
  console.log(c.value);
  console.log(d.value);
}
let val = valueFunc();

// call by ref and call by value in js
function inc1(num1) {
  num1++;
}
let num1 = 5;
inc1(num1);
console.log(num1);

function inc2(num2) {
  num2.value++;
}
let num2 = { value: 5 };
inc2(num2);
console.log(num2.value);
