// scope
{
  var a = 4; // let limits it in brackets
}
console.log(a);

function func() {
  let b = 6; // var limits it in function code block
}
console.log(b);

// no error will be thrown
function a() {
  const c = 56;
}
function b() {
  const c = 78;
}

// reducing an array
let num = [1, 2, 3, 4, 5, 6];
let sum = 0;
// for-in is for string, for-of is for numbers
for (let vals of num) {
  sum = vals + sum;
}
console.log(sum);

// reducing
let totalOfNum = num.reduce(
  // (total = 0, for-of loop) => sum, 0[initialising accum. with 0]
  (accumulator, currentVal) => accumulator + currentVal,
  0
);
console.log(totalOfNum);
