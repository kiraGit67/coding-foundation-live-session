"use strict";

const toDoState = {
  toDos: [
    { id: 1, description: "Learn HTML", done: false },
    { id: 2, description: "Learn CSS", done: true },
  ],
};

// @TODO render toDos
// <li><input type="checkbox">Learn HTML</li>

function renderItem(description, done) {
  //Li-Element
  const toDoLi = document.createElement("li");

  //Styling
  toDoLi.classList.add("toDo-item");

  //Checkbox Element
  const toDoCheckBox = document.createElement("input");
  toDoCheckBox.type = "checkbox";

  toDoCheckBox.checked = done;

  // create TextNode
  const toDoText = document.createTextNode(description);

  toDoCheckBox.addEventListener("change", () => {
    toDoLi.classList.toggle("toDoDone");
  });

  // Put all Elements together
  toDoLi.append(toDoCheckBox, toDoText);
  /**
   * Same like two lines of appendChild
   * toDoLi.appendChild(toDoCheckBox);
   * toDoLi.appendChild(toDoText);
   */

  return toDoLi;
}

// @TODO Create Form to add new ToDo
function addNewToDo() {
  //Get Input Field Value
  const newToDoInput = document.querySelector("#new-toDo-input");

  //Get ToDoList ul Element - done
  //const toDoList = document.querySelector("#toDoList");

  for (let toDoItem of toDoState.toDos) {
    if (
      newToDoInput.value.toLowerCase() === toDoItem.description.toLowerCase()
    ) {
      return;
    }
  }

  if (newToDoInput.value !== "") {
    toDoState.toDos.push({
      id: +new Date(),
      description: newToDoInput.value,
      done: false,
    });
  }

  event.target.reset();
}

// @ToDo render ToDoList
function render() {
  const toDoList = document.querySelector("#toDoList");
  toDoList.innerHTML = "";

  for (let toDo of toDoState.toDos) {
    const newToDoItem = renderItem(toDo.description, toDo.done);
    toDoList.append(newToDoItem);
  }
}

// @ToDo Submit form to add ToDo
const addToDoForm = document.querySelector("#add-toDo-form");

addToDoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  addNewToDo();
  render();
});

render();
