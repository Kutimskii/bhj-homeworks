let second = +document.getElementById("timer").textContent
let hours = 2;
let mins = 1;
let interval = setInterval(function timer () {
  second--
  let outSecond = second;
  let outMins = mins;
  let outHours = hours;
  if (outSecond < 10) {
    outSecond = "0" + second;
  } 
  if (outHours < 10) {
    outHours = "0" + hours;
  } 
  if ( outMins < 10) {
    outMins = "0" + mins;
  }
  document.getElementById("timer").textContent = outHours + ":" + outMins + ":" + outSecond;
  if (second === 0 && mins > 0)  {
    mins--
    second = 60
    return document.getElementById("timer").textContent = outHours + ":" + outMins + ":" + outSecond;
  } else if (second === 0 && mins === 0 && hours > 0){
    hours--
    second = 60
    mins = 59
    return document.getElementById("timer").textContent = outHours + ":" + outMins + ":" + outSecond;
  }
    else if (second === 0 && mins === 0 && hours === 0) {
    clearInterval(interval);
    alert("Вы победили в конкурсе!")
    window.location.href='https://binaries.templates.cdn.office.net/support/templates/ru-ru/tf16392878_win32.dotx';
    return;
  } 
  
},1000)

