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
console.log(3 != 487);

// ternary operators
let age = 21;
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
// consider f as 0 and t as 1
console.log(false || true); // true // true
console.log(false && true); // false // false
console.log(true || "bvifvn"); // true // true
console.log(true && "bvifvn"); // "bvifvn" // "bvifvn"
console.log(false || "bvifvn"); // "bvifvn" // "bvifvn"
console.log(false && "bvifvn"); // false // false
console.log(false || "fvjk" || 1); // "fvjk" // "fvjk"
console.log(false && "fvjk" && 1); // false // false
console.log(true || "fvjk" || 1); // true // true
console.log(true && "fvjk" && 1); // 1 // error

// bitwise operators, use of truth tables
console.log(3 | 5); // OR operator
console.log(5 & 4); // AND operator
