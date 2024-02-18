const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const SAVEDTODO_KEY = "savedToDo";

let saveToDo = [];

function saveToDos() {
  localStorage.setItem(SAVEDTODO_KEY, JSON.stringify(saveToDo));
}

function addToDo(todos) {
  const li = document.createElement("li");
  li.id = todos.id;
  const span = document.createElement("span");
  span.innerText = todos.text;
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

  const newToDoObj = {
    text: todos,
    id: Date.now(),
  };

  saveToDo.push(newToDoObj);
  addToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const fixedToDos = localStorage.getItem(SAVEDTODO_KEY);

if(fixedToDos !== null) {
  const parsedToDos = JSON.parse(fixedToDos);
  saveToDo = parsedToDos;
  parsedToDos.forEach(addToDo);
}
