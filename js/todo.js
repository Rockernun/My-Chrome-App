const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function addToDo(todos) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerText = todos;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todos = toDoInput.value;
  toDoInput.value = "";
  addToDo(todos);
}

toDoForm.addEventListener("submit", handleToDoSubmit);