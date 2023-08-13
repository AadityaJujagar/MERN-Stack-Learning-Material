// simple if-else statement
let percentage = prompt("Enter your percentage:");
if (percentage >= 90) {
  console.log("A grade");
} else if (percentage >= 80) {
  console.log("B grade");
} else if (percentage >= 70) {
  console.log("C grade");
} else if (percentage >= 60) {
  console.log("D grade");
} else {
  console.log("E grade");
}

// switch-case
let switchValue = prompt("enter any vowel:");
switch (switchValue) {
  case "A":
  case "a":
    console.log("A");
    break;
  case "E":
  case "e":
    console.log("E");
    break;
  case "I":
  case "i":
    console.log("I");
    break;
  case "O":
  case "o":
    console.log("O");
    break;
  case "U":
  case "u":
    console.log("U");
    break;
  default:
    console.log("not a vowel");
    break;
}
