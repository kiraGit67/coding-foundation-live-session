"use strict";

//Variable for all div Elements
const divs = document.querySelectorAll("div");
/*
// ForEach() Function for all 3 divs
divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("Hi!");
  });
});


document.addEventListener("click", (ev) => {
  if (ev.target.matches("div")) {
    console.log("hi");
  }
});
*/

addGlobalEventListener("click", "div", (e) => {
  console.log("Hi!");
});

// global function
function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

const newDiv = document.createElement("div");

newDiv.style.width = "60vh";
newDiv.style.height = "60vh";
newDiv.style.backgroundColor = "purple";

document.body.appendChild(newDiv);
