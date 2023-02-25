"use strict";

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

const divs = document.querySelectorAll("div");

// Grandparent *********************************************** */

grandparent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Grandparent Bubble");
});

//Parent ******************************************************** */
parent.addEventListener("click", printHi);

setTimeout(() => {
  parent.removeEventListener("click", printHi);
}, 2000);
/*
parent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("Parent Bubble");
  },
  { once: true }
);
*/
// Child ********************************************************** */

child.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Child Bubble");
});

// Function printHi()
function printHi() {
  console.log("Hi");
}

// ForEach() Function for all 3 divs
divs.forEach((div) => {
  div.addEventListener("click", () => {
    console.log("Hi!");
  });
});
