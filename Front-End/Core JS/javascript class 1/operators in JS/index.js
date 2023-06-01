// arithmatic operators
let a = 5;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// assignment operator
let x = 7;
let y = 5;
y = y + 3;
let z = 6;
z *= 4; // and so on

// pre-inc/pre-dec/post-inc/post-dec
let c = 4;
let d = 4;
let e = 4;
let f = 4;
console.log(c++);
console.log(++d);
console.log(e--);
console.log(--f);

// comparison operators
console.log(5 > 3);
console.log(5 < 4);
console.log(5 >= 1);
console.log(5 <= 5);
let v1 = 1;
let v2 = "1";
console.log(v1 == v2); // loose equality
console.log(v1 === v2); // strict equality
console.log(3 != 487); // negation

// ternary operators
let age = 21;
// result = 'if this' (?)'do this' else(:)'do this'
let stat = age > 18 ? "can vote" : "cant vote";
console.log(stat);

// logical operators
if (!0) {
  console.log("!0");
}
if (1 && 0 == 0) {
  console.log("1 && 0 == 0");
}
if (1 || 0) {
  console.log("1 || 0 == 1");
}

// operating with non-binaries, opposite of cpp
// consider f as 0 and t as 1 // js // cpp

// console.log(false || true); // true // 1
// console.log(false && true); // false // 0

// falsey values: undef, null, NaN, 0, false, ''
// truthy values: vals other than truthy

console.log(true || "bvifvn"); // true // 1
console.log(false || "bvifvn"); // "bvifvn" // 1
console.log(false || "fvjk" || "s"); // "fvjk" // 1
console.log(true || "fvjk" || "s"); // true // 1

console.log(true && "bvifvn"); // "bvifvn" // 1
console.log(false && "bvifvn"); // false // 0
console.log(false && "fvjk" && "s"); // false // 0
console.log(true && "fvjk" && 2); // 2 // 1

// bitwise operators, use of truth tables
console.log(3 | 5); // OR operator
console.log(5 & 4); // AND operator
