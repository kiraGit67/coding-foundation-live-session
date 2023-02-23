"use strict";

// Variables for todo-input field, add- and delete-button and ul-Element
const toDoInput = document.querySelector("input");
const addButton = document.querySelector("#add-btn");
const deleteButton = document.querySelector("#delete-btn");
const ul = document.querySelector("ul");

let counter = 0;

// function for creating new todo list items
function addListItem(container, element, text) {
  const newListItem = document.createElement(element);
  const listItemText = document.createTextNode(text);
  newListItem.appendChild(listItemText);
  container.appendChild(newListItem);
}

// function for deleting the complete list
function deleteList(container) {
  container.innerText = "";
}

// Adding event listener to add- and delete-button
addButton.addEventListener("click", function () {
  counter++;
  addListItem(ul, "li", counter + ") " + toDoInput.value);
  toDoInput.value = "";
});

deleteButton.addEventListener("click", function () {
  counter = 0;
  deleteList(ul);
});
