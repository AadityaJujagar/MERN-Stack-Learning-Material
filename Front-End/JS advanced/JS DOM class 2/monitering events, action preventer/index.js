// monitering all events
moniterEvents(document);
unmoniterEvents(document);

// applying an event listner
document.addEventListener("click", function () {
  console.log("clicked");
});

// above example with different approach
function printAfterClick() {
  console.log("clicked on document");
}
document.addEventListener("click", printAfterClick);

// best example, index.html will show o/p in console
let content = document.querySelector("h1");
// content
content.addEventListener("click", (content.style.color = "blue"));
// then click the h1 element

// removing an event listener
// must have same: target, type, function
document.removeEventListener("click", printAfterClick);

// event data fetching
const para = document.querySelector("#para");
para.addEventListener("click", function (eventToBePrinted) {
  console.log(eventToBePrinted);
});

// the default action preventer
let linksAll = document.querySelectorAll("a");
let thirdLink = linksAll[2];
thirdLink.addEventListener("click", function (eventPrevent) {
  eventPrevent.preventDefault();
  console.log("link event just got prevented");
});
