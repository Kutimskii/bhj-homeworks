let cookie = document.getElementById("cookie");
let countClick = 0;
let clickPerSecond  = 0;
let div =  document.createElement("div");
div.innerHTML = "Количество кликов в секунду: ";
cookie.before(div);
let span = document.createElement("span");
div.append(span);
let date = new Date();
let nowDate = new Date();
function murderTime () {
  countClick++;
  document.getElementById("clicker__counter").textContent = countClick;
  if (countClick % 2) {
    cookie.width = 300;
    cookie.height = 200;
    nowDate = new Date();
    clickPerSecond  = 1/((nowDate - date)/1000);
    span.innerHTML = clickPerSecond.toFixed(2);
  } else {
    cookie.width = 200;
    cookie.height = 128;
    date = new Date();
    clickPerSecond  = 1/((date - nowDate)/1000);
    span.innerHTML = clickPerSecond.toFixed(2);
  }
}
cookie.onclick = murderTime;