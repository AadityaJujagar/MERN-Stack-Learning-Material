// dependent promises
let myPromise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("myPromise4 is executed");
  }, 3000);
  resolve("promise4 resolved");
});
myPromise4
  .then((val) => {
    console.log(val);
    let myPromise5 = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("myPromise5 executed");
      }, 6000);
      resolve("promise5 resolved");
    });
    return myPromise5;
  })
  .then((value) => console.log(value));

// async function only returns promise
async function abc() {
  return "promise returned in console";
}
console.log(abc());

// await function, parallelism eliminated
async function weather() {
  let mahaW = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Maharashtra weather forcasted");
    }, 9000);
    resolve("mh weather resolved");
  });
  let karW = new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Karnataka weather forcasted");
    }, 12000);
    resolve("karW weather resolved");
  });

  let mW = await mahaW;
  let kW = await karW;
  return [mW, kW];
}
console.log(weather());
