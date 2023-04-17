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
false || true; // true
false && true; // false
true || "bvifvn"; // true
true && "bvifvn"; // "bvifvn"
false || "bvifvn"; // "bvifvn"
false && "bvifvn"; // false
false || "fvjk" || 1; // "fvjk"
false && "fvjk" && 1; // false
true || "fvjk" || 1; // true
true && "fvjk" && 1; // 1

// cout << (false || true) << endl;       // true
// cout << (false && true) << endl;       // false
// cout << (true || "bvifvn") << endl;    // true
// cout << (true && "bvifvn") << endl;    // "bvifvn"
// cout << (false || "bvifvn") << endl;   // "bvifvn"
// cout << (false && "bvifvn") << endl;   // 0
// cout << (false || "fvjk" || 1) << endl; // 1
// cout << (false && "fvjk" && 1) << endl; // 0
// cout << (true || "fvjk" || 1) << endl;  // 1
// cout << (true && "fvjk" && 1) << endl;  // 1
