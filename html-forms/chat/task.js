const chat = document.querySelector(".chat-widget")
const input = document.getElementById("chat-widget__input")
const messages = document.querySelector( '.chat-widget__messages' );
let answersOfBot = ["Добрый день!",
 "К сожалению все операторы сейчас заняты. Непишите нам больше",
 "Где ваша совесть?,",
 "Вы не куплил ни одного товара, чтобы так с нами разговаривать!",
 "Кто тут?",
 "Мы ничего не будем вам продавать!",
"Добрый день! До свидания!"];

function answer (dayTime,randomAnswer) {
  messages.innerHTML += `
  <div class="message">
    <div class="message__time">${dayTime}</div>
    <div class="message__text">${randomAnswer}</div>
  </div>`
  messages.scrollIntoView(false)
}
function chating (event) {
  let randomAnswer = answersOfBot[Math.floor(Math.random() * answersOfBot.length)];
  const date = new Date();
  let dayTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  if ((input.value) && event.key ==="Enter" ) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${dayTime}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>`
    answer (dayTime, randomAnswer)
    return
  } 
  if (!(input.value) && !(event)) answer (dayTime, randomAnswer);
  return
}

chat.addEventListener("click", () => {
  console.log("sdfsdf")
  chat.classList.add("chat-widget_active");
  setInterval(()=> {
    chating()
  },30000);
})

document.addEventListener("keyup",chating)

