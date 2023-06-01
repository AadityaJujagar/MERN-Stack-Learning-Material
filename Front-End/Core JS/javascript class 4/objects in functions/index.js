// objects in functions, readonly
let fullNameInput = {
  fName: "Aaditya",
  lName: "Jujagar",
};

function fullNamePrint() {
  return `${fullNameInput.fName} ${fullNameInput.lName}`;
}
console.log(fullNamePrint());

// getter and setter functions using objects
let person = {
  fN: "Aaditya",
  lN: "Jujagar",

  // getter code
  get printPerson() {
    return `${person.fN} ${person.lN}`;
  },

  //setter code
  set printPerson(val) {
    if (typeof val != string) {
      throw new Error("Non-string value error appeared from console port");
    }
    let parts = val.split(" ");
    this.fN = parts[0];
    this.lN = parts[1];
  },
};

// getter is being called
console.log(person.printPerson);
// setter is being called
person.printPerson = "Aadi Juja";
console.log(person.printPerson);

// error handling: try and catch log
try {
  person.printPerson = 12;
} catch (e) {
  // alert box appears for error
  alert(e);
}
