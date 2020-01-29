function time() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  const hours_div = document.querySelector("#hour");
  const minutes_div = document.querySelector("#minute");
  const seconds_div = document.querySelector("#second");

  hours_div.innerHTML = `${hours}:`;
  minutes_div.innerHTML = `${minutes}:`;
  seconds_div.innerHTML = seconds;
}

setInterval(time, 500);
