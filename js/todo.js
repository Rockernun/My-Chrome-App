const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const SAVEDTODO_KEY = "savedToDo";

const savedToDo = [];

function saveToDos() {
  localStorage.setItem(SAVEDTODO_KEY, JSON.stringify(savedToDo));
}

function addToDo(todos) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = todos;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const todos = toDoInput.value;
  toDoInput.value = "";
  savedToDo.push(todos);
  addToDo(todos);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const fixedToDos = localStorage.getItem(SAVEDTODO_KEY);

if(fixedToDos !== null) {
  const parsedToDos = JSON.parse(fixedToDos);
  parsedToDos.forEach();
}
