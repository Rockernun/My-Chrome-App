const userForm = document.getElementById("user-form");
const userInput = userForm.querySelector("input");
const hello = document.getElementById("hello");

const HIDDEN_CLASSNAME = "hidden";

function onUserSubmit(event) {
  event.preventDefault();
  userForm.classList.add(HIDDEN_CLASSNAME);
  const userName = userInput.value;
  hello.innerText = `안녕하세요 ${userName}님!`
  hello.classList.remove(HIDDEN_CLASSNAME);
}

userForm.addEventListener("submit", onUserSubmit);