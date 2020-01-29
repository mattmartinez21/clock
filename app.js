function time() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  const hours_div = document.querySelector("#hour");
  const minutes_div = document.querySelector("#minute");
  const seconds_div = document.querySelector("#second");

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  hours_div.innerHTML = `${hours}:`;
  minutes_div.innerHTML = `${minutes}:`;
  seconds_div.innerHTML = seconds;
}

setInterval(time, 500);
