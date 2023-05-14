// object creation
let rect = {
  width: 10,
  height: 20,
};
console.log(rect.width);

// method in an object
let sq = {
  side: 30,
  meth: function () {
    console.log("method in an object printed\n");
  },
};
console.log(sq.meth());

// object creation using: 1) factory function method
function createRect() {
  return (rectangle = {
    width: 10,
    height: 20,
    drawRect: function () {
      console.log("drawing rectangle");
    },
  });
}
let callFunc = createRect(); // storing output of function
console.log(callFunc.width); // calling a func and object
console.log(callFunc.drawRect()); // calling a func and method

// custom input in an object via arguments
function objFuncOut(o1, o2) {
  let obj = {
    obj1: o1,
    obj2: o2,
    objFuncIn() {
      console.log("objFuncIn called");
    },
  };
  return obj;
}
let callObjFuncOut = objFuncOut("o1 input", "o2 input");
console.log(callObjFuncOut.obj1);
console.log(callObjFuncOut.obj2);
console.log(callObjFuncOut.objFuncIn());

// 2) constructor function: Pascal Notation used
// e.g. : NumberOfStudents
function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  this.Rect = function () {
    console.log("insider function Rect executed");
  };
}
let CallRectangle1 = new Rectangle("w1", "h1");
let CallRectangle2 = new Rectangle("w2", "h2");
console.log(CallRectangle1.width);
console.log(CallRectangle2.Rect());
