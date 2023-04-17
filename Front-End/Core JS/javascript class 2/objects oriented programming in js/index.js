// objects
// rectAngle
const rectAngle = {
  lenght: 2,
  breadth: 4,
};

// method
// area.firstMethod() for execution
let area = {
  circle: (22 / 7) * 3 * 3,
  square: function () {
    let sideLength = prompt("enter value of one side of triangle:");
    console.log("area of square:" + sideLength * sideLength);
  },
};

// factory function
// return can be written directly instead of let
function createObjects1() {
  let areaOfTriangle = {
    // tri.about
    about: "calling an object.method() via a function",
    // tri.area()
    area: function () {
      let base = prompt("base:");
      let height = prompt("height:");
      console.log(0.5 * base * height);
    },
  };
  return areaOfTriangle;
}
let tri = createObjects1();

// via custom inputs
function createObjects2(key) {
  return (enterAnything = {
    anything: key,
  });
}
let anything = prompt("enter anything:");
let formulae = createObjects2(anything);

// constructor function
function ConstructorFunc(l, b) {
  this.len = l;
  this.bre = b;
  this.area = function () {
    console.log("into area function");
  };
}
let returnFunc = new ConstructorFunc(3, 5);
