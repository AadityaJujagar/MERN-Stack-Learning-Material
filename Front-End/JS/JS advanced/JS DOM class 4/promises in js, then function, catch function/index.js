// promises in js, executes parallely in background
let myPromise0 = new Promise(function (resolve, reject) {
  let val = prompt("val for promise: ");
  setTimeout(function () {
    console.log("promise executed after 1 sec\n");
  }, 3000);
  if (val > 0) {
    resolve("valid value at promise");
  } else {
    reject("rejected cuz val value wasnt valid");
  }
});
// type promise in console port

// methods of error handling in js
// then() function
let myPromise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise1 executed after 4 sec\n");
  }, 6000);
  resolve("promise 1 resolved");
});
myPromise1.then((value) => {
  console.log(value);
});

// catch() function
let myPromise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise2 executed after 8 sec\n");
  }, 9000);
  reject(new Error("error spotted at promise 2"));
});
myPromise1.catch((error) => {
  console.log(error);
});

// using catch error in then() function
let myPromise3 = new Promise(function (resolve, reject) {
  let val = prompt("enter value of val: ");
  setTimeout(function () {
    console.log("promise3 executed after 10 sec\n");
  }, 12000);
  if (val > 0) {
    resolve("valid val for promise 3");
  } else {
    reject(new Error("error spotted at promise 3"));
  }
});
myPromise3.then((val) => {
  console.log(val);
  (error) => {
    // can be used in then() also
    console.log(err);
  };
});