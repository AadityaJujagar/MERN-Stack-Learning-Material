// perfomance measure, accurate

const t1 = performance.now();
// adding 100 paras
for (let i = 0; i < 100; i++) {
  let newEle = document.createElement("p");
  newEle.textContent = "para no. " + i;
  document.body.appendChild(newEle);
}
const t2 = performance.now();
console.log("time taken to run above code: ", t2 - t1, "ms");

const t3 = performance.now();
// optimising of above code
let myDiv = document.createElement("div");
for (let j = 0; j < 100; j++) {
  let ele = document.createElement("p");
  ele.textContent = "para " + j;
  myDiv.appendChild(ele);
}
document.body.appendChild(myDiv);
const t4 = performance.now();
console.log("time taken to run above second code: ", t4 - t3, "ms");

const t5 = performance.now();
// doc fragment
let fragment = document.createDocumentFragment();
for (let k = 0; k < 100; k++) {
  let newEle = document.createElement("p");
  newEle.textContent = "para no. " + k;
  document.body.appendChild(newEle);
}
document.body.appendChild(fragment);
// single reflow and single repaint
const t6 = performance.now();
console.log("time taken to run above second code: ", t5 - t6, "ms");
