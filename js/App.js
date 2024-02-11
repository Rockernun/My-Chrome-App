const userForm = document.getElementById("user-form");
const userInput = userForm.querySelector("input");
const hello = document.getElementById("hello");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";


function onUserSubmit(event) {
  event.preventDefault();
  userForm.classList.add(HIDDEN_CLASSNAME);
  const userName = userInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  showHello(userName);
}

function showHello(userName) {
  hello.innerText = `안녕하세요 ${userName}님!`;
  hello.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  userForm.classList.remove(HIDDEN_CLASSNAME);
  userForm.addEventListener("submit", onUserSubmit);
} else {
  showHello(savedUserName);
}
