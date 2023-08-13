let element = document.querySelector(".wrapper");
element.addEventListener("click", function (anEvent) {
  if (anEvent.target.nodeName === "span") {
    // know the flow of the target property
    console.log(anEvent.target.textContent);
  } else {
    console.log("clicked on the para", anEvent.target.textContent);
  }
});
