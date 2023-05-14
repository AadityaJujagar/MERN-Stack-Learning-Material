// primitive type
// premitives are copied by their values
let a = 5;
let b = a;
a++;
console.log(a);
console.log(b);

// reference type
// references are copied by their values
let c = { value: 4 };
let d = c;
c.value--;
console.log(c.value);
console.log(d.value);

// iterating through objects
// for-in loop
let rectangle = {
  len: 44,
  bre: 55,
};
for (let key in rectangle) {
  console.log(key, rectangle[key]);
  // console.log(key,value);
}

// for-of loop
for (let key of Object.keys(rectangle)) {
  console.log(key, rectangle[key]);
}
for (let key of Object.entries(rectangle)) {
  console.log(key, rectangle[key]);
}

// finding if object property is in object or not
if ("color" in rectangle) {
  console.log("color is in rectangle");
} else {
  console.log("color is not in rectangle");
}
