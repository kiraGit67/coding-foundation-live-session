"use strict";

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Grandparent *********************************************** */
grandparent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("Grandparent Capture");
  },
  { capture: true }
);

grandparent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Grandparent Bubble");
});

//Parent ******************************************************** */
parent.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    console.log("Parent Capture");
  },
  { capture: true }
);

parent.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Parent Bubble");
});

// Child ********************************************************** */
child.addEventListener(
  "click",
  (e) => {
    //console.log(e.target);
    //e.stopPropagation();
    console.log("Child Capture");
  },
  { capture: true }
);

child.addEventListener("click", (e) => {
  //console.log(e.target);
  console.log("Child Bubble");
});

// ***************************************************************** */
document.addEventListener(
  "click",
  (e) => {
    console.log("Document Capture");
  },
  { capture: true }
);

document.addEventListener("click", (e) => {
  console.log("Document Bubble");
});
