// mapping function
let numbers = [3, 4, 3, 2, 7, 4, 1, 0];
let items = numbers.map(function (val) {
  return "student_number : " + val;
});
console.log(items);

let arrowItems = numbers.map((val) => "stuArray_number : " + val);
console.log(arrowItems);

// mapping with objects
let numbers2 = [2, 6, 2, 4, 2, -9, -6, -5, -2, -1];
let filtered1 = numbers2.filter((val1) => val1 >= 0);
let filtered2 = numbers2.filter((val2) => val2 < 0);

let itemsVal1 = filtered1.map(function (val1) {
  let obj1 = { positiveVal: val1 };
  return obj1;
});
let itemsVal2 = filtered2.map(function (val2) {
  let obj2 = { negativeVal: val2 };
  return obj2;
});

console.log(itemsVal1, itemsVal2);
