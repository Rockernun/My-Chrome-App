const clock = document.querySelector("#clock");

/*function showClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds());

  clock.innerText = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}*/

function showClock() {
  clock.innerText = new Date().toLocaleTimeString();
}

showClock();
setInterval(showClock, 1000);



