const day = document.querySelector("#date");

function showDate() {
  const date = new Date();
  let today = date.getDay();

  if(today === 0) {
    today = "일"
  } 
  else if(today === 1) {
    today = "월"
  }
  else if(today === 2) {
    today = "화"
  }
  else if(today === 3) {
    today = "수"
  }
  else if(today === 4) {
    today = "목"
  }
  else if(today === 5) {
    today = "금"
  }
  else if(today === 6) {
    today = "토"
  }

  day.innerText = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${today}요일`;
}


showDate();
