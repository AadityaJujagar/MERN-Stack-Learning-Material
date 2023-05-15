// creation of array
numbers = [1, 5, 7, 9, 2];
console.log(numbers);

// add item to the beginning of the array
numbers.unshift(4);
console.log(numbers);
// splice function explained
numbers.splice(3, 2, "a", "string", true, 2002);
console.log(numbers);
// add item to the end of the array
numbers.push(8);
console.log(numbers);

console.log(numbers[0]);
console.log(numbers[6]);
console.log(numbers.length);
console.log(numbers.indexOf("a"));

// if an array exist in an array
console.log(numbers.includes(4));
console.log(numbers.indexOf("a", 4));

// experiments on references
// array of objects
let allTypes = [
  { num: 1, int: 4, str: "string" },
  { num: 2 },
  { bool: true, arr: [1, 2, 3] },
  { num: 4, obj: { x: 1, y: 2 } },
];
console.log(allTypes);
console.log(allTypes.includes({ num: 1, int: 4 }));

// callback function js
let theType1 = allTypes.find(function (theType1) {
  return theType1.str === "string";
});
console.log(theType1);

// arrow function
let theType2 = allTypes.find((theType2) => theType2.bool === true);
console.log(theType2);

// removal methods
allTypes.pop();
console.log(allTypes);

allTypes.shift();
console.log(allTypes);

allTypes.splice({ num: 2 }, 1);
// OR allTypes.splice(index,1);
console.log(allTypes);

// emptying an array
// false method which copied addresses: nums1 = [];
nums1 = [1, 3, 5, 7, 9, 11];
console.log(nums1);
nums2 = nums1;
console.log(nums2);

nums1.length = 0;

console.log(nums1);
console.log(nums2);

// OR: nums1.splice(1, nums1.length);
