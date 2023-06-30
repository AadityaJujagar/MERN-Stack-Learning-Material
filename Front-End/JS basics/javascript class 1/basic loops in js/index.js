// loops

// for loop
let number1 = prompt("numbers upto:");
for (let i = 1; i <= number1; i++) {
  console.log(i + "\n");
}

// while loop
let j = 1;
number2 = prompt("table of:");
while (j <= 10) {
  console.log(number2 * j + "\n");
  j++;
}

// do-while loop
let k = 2;
number3 = prompt("even numbers upto:");
do {
  console.log(k + "\n");
  k += 2;
} while (k <= number3);
