// JavaScript posseses the automated garbage value processing
// collecting management system called as Garbase Collector

// object cloaning
let rectangle1 = {
  len: 7,
  bre: 6,
  ht: 10,
};
let rectangle2 = {};

// cloning done here
for (let key in rectangle1) {
  rectangle2[key] = rectangle1[key];
}
// pringing the clone
for (let key in rectangle2) {
  console.log(key, rectangle2[key]);
}

// another method
let rectangle3 = Object.assign({}, rectangle1, rectangle2);
for (let key in rectangle3) {
  console.log(key, rectangle3[key]);
}

// another method
let rectangle4 = { ...rectangle3 };
for (let key in rectangle4) {
  console.log(key, rectangle4[key]);
}
