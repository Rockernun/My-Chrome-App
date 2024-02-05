const userForm = document.getElementById("user-form");
const userInput = userForm.querySelector("input");
const userButton = userForm.querySelector("button");

function handleUserBtnClick() {
  console.log(userInput.value);
  console.log("clicked!");
}

userButton.addEventListener("click", handleUserBtnClick);