// Math operations in js
console.log(Math.random());
console.log(Math.PI);
console.log(Math.round(22.73));
console.log(Math.min(2, 3, 5, 7, 8, 9), Math.max(2, 3, 5, 7, 8, 9));
console.log(Math.abs(-23), Math.abs(23));
// etc..

// string to object conversion
let lN = "Jujagar";
let fN = new String("Aaditya");
console.log(typeof lN);
console.log(typeof fN);
// use of dot [.] notation considers

console.log(fN.includes("adi"));
console.log(lN.startsWith("J"));
console.log(fN.endsWith("a"));
console.log(lN.indexOf("ja"));
console.log(fN.toUpperCase());
console.log(lN.toLowerCase());

let sentence1 = "    Aaditya Vijaykumar Jujagar     ";
console.log(sentence1.trim());

let sentence2 = "I am a web dev";
sentence2.replace("web dev", "ML engineer");
// do it in colsole port

console.log(sentence2.split(" "));

// placeholder
let whatAreYou = "Backend Specialist";
let sentence3 = `
i'm
    a
        ${whatAreYou}
`;
console.log(sentence3);

// to be done in console port
let date1 = new Date();
console.log(date1);

let date2 = new Date("February 20 2002 12:00");
console.log(date2);

let date3 = new Date(2002, 1, 20, 12, 0, 0);
console.log(date3);

date3.setFullYear(2000);
date3.setDate(18);
date3.setMonth(8);

console.log(date3);
console.log(date2.getDate());
console.log(date2.getFullYear());
console.log(date2.getMonth() + 1);
