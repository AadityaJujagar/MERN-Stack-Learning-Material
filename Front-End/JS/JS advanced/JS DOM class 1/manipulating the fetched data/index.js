// add a class to a random text para tag
let tex = document.querySelector(".text");
tex.innerHTML;
// only textContent can help to check the inner texts
tex.textContent; // rendering of tags doesnt happen here

// IMP : innerText doesnt display the text who has Hidden property

// adding html element using js, faster method below
let newC = document.querySelector(".newlyAddedClass");
// newC
let newP = document.createElement("p");
// newP
newP.appendChild(newP);

// for other tags...
let newContent = document.createElement("a"); // for texts: .textContent or .innerText
newContent.href = "https://www.google.com";
prevContent.append(newContent);

// adding child tags at different positions other than last
let new1 = $0;
// beforeBegin
let new2 = document.createElement("b");
new2.textContent = "a bold text";
new1.append(new2);
new1.insertAdjecentElement('beforeBegin',new2);

// afterBegin, similar for beforeEnd and afterEnd
let new3 = document.createElement("b");
new3.textContent = "a bold text";
new1.append(new3);
new1.insertAdjecentElement('afterBegin',new3);

// remove child, exact opposite of .appendChild
let x1 = $0;
let x2 = document.createElement('h2');
x1.appendChild(x2);
x1.removeChild(x2); // it gets removed