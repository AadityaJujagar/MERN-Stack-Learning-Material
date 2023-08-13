// cheap method of multiple actions of addEventListener
let aDiv1 = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let newEle1 = (document.textContent = "para no. " + i);
  newEle1.addEventListener("click", function (clickedPara1) {
    console.log("clicked the para no. ", i);
  });
  aDiv1.appendChild(newEle1);
}
// can be stored in <body><body/> tag only
document.body.appendChild(aDiv1);

// optimised code for above
let aDiv2 = document.createElement("div");
for (let j = 0; j < 100; j++) {
  let newEle2 = document.createElement("p");
  newEle2.textContent = "para number " + j;
  aDiv2.appendChild(newEle2);
}
// loses the individuality of the paragraphs
function printClicked2(clickedPara2) {
  console.log("para clicked");
}
// add listener to div instead of elements
aDiv2.addEventListener("click", printClicked2);
document.body.appendChild(aDiv2);

// target function
let aDiv3 = document.createElement("div");
for (let j = 0; j < 100; j++) {
  let newEle3 = document.createElement("p");
  newEle3.textContent = "para number " + j;
  aDiv3.appendChild(newEle3);
}
// regains individuality of the paragraphs
function printClicked3(clickedPara3) {
  console.log("para clicked" + clickedPara3.target.textContent);
}
// add listener to div instead of elements
aDiv3.addEventListener("click", printClicked3);
document.body.appendChild(aDiv3);
