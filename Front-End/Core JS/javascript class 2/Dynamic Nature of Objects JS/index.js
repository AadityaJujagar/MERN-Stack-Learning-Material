// addition and deletion of objects and methods
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

// addition of a new property
CallRectangle1.color = "gray";
console.log(CallRectangle1.color);
// deletion of that property
delete CallRectangle1.color;
console.log(CallRectangle1.color);

// constructors in JS
console.log(CallRectangle1.constructor);
console.log(Rectangle.constructor);

// internal working of function / alternative way to write it down
let CallRectangle3 = new Rectangle(
  // parameters/arguments
  "w3",
  "h3",
  // syntax has to be here
  `this.width = w;
this.height = h;
this.Rect = function () {
  console.log("insider function Rect executed");
};`
);
console.log(CallRectangle3.width);
