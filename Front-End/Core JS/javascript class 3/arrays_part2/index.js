// combining the arrays
let arr1 = ["a", "b", "c", 3, 4];
let arr2 = ["d", "e", 5, 6, 7];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// slicing in array, slice: (x, y:n-1)
let arr4 = arr3.slice(1, 6);
console.log(arr4);

// spread operator
let a1 = [1, 2, 3];
let a2 = [4, 5];
let a3 = [...a1, 3.1, 3.2, ...a2];
console.log(a3);
let a4 = [...a3];
console.log(a4);

// iterating an array
// forEach loop
// forEach loop in cpp: for(auto i = arr){}
let arr = [1, 4, 5, 2, 4, 6, 8, 4, 4];
arr.forEach(function (num) {
  console.log(num);
});

// joining arrays
let array1 = ["a", "b", "c", true, 45];
const toBeJoined = array1.join("_");
console.log(toBeJoined);

let joinedAlready = "this string has to be splitted";
let splittedNow = joinedAlready.split("t");
console.log(splittedNow);

// sorting an array
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 2, 1];
nums.sort();
console.log(nums);
nums.reverse();
console.log(nums);

// filtering function
let array2 = [1, 2, 3, 4, 5, -2, -3, -4];
let positiveVals = array2.filter(function (pVals) {
  return pVals >= 0;
});
console.log(positiveVals);
let negativeVals = array2.filter((nVals) => nVals < 0);
console.log(negativeVals);
