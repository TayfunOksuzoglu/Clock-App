function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  // Digital Clock

  document.getElementById('hour').innerHTML = hh < 10 ? '0' + hh : hh;
  document.getElementById('min').innerHTML = mm < 10 ? '0' + mm : mm;
  document.getElementById('sec').innerHTML = ss < 10 ? '0' + ss : ss;

  // Analog Clock

  let h = document.getElementsByClassName('hrs')[0];
  let m = document.getElementsByClassName('mins')[0];
  let s = document.getElementsByClassName('secs')[0];

  h.style.transform = `rotate(${30 * hh + mm / 2}deg)`;
  m.style.transform = `rotate(${6 * mm}deg)`;
  s.style.transform = `rotate(${6 * ss}deg)`;
}

setInterval(currentTime, 1000);
