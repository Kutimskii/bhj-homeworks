let xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = "json";
xhr.send();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    for (answr of xhr.response.data.answers) {
      document.querySelector(".poll").insertAdjacentHTML('afterEnd',`<button class="poll__answer">
      ${answr}
    </button>`)
    }
    document.querySelector(".poll").insertAdjacentHTML('afterEnd', `<div class="poll__title" id="poll__title">
    ${xhr.response.data.title}
  </div>`
    )
    let answers = [...document.querySelectorAll(".poll__answer")]
    answers.forEach(el => {
      el.addEventListener ('click', function (event) {
        alert("Спасибо, ваш голос засчитан!")
        event.preventDefault()
      })
    })
  }
}