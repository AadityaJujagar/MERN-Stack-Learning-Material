// change in css effects using javascript in console
let content = $0;
// content.style.
content.style.color = "red";
content.style.backgroundColor = "green";

// content.style.cssText = '';
content.style.cssText = "color: blue; background-color: pink; font-size: 20px";

// content.setAtrribute('','')
content.setAttribute("style", "color: violet; background-color: orange;");
content.setAttribute("id", "newId");
content.setAttribute("class", "newClass");

// content.className.split()
content.setAttribute("class", "class1 class2 class3 class4");
content.className;
content.className.split(' ');

// content.classList.
content.classList;
// content.classList.add()
// content.classList.remove()
// content.classList.toggle()
// content.classList.contain()