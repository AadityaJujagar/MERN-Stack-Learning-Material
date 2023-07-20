const countVal = document.querySelector("#count");
function inc() {
  // parseInt converts string val to int
  let value = parseInt(countVal.innerText);
  // internal increment
  value = value + 1;
  // updation
  countVal.innerText = value;
}
const dec = () => {
  // parseInt converts string val to int
  let value = parseInt(countVal.innerText);
  // internal increment
  value = value - 1;
  // updation
  countVal.innerText = value;
};
