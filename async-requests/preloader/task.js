let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json"
xhr.send();
xhr.onreadystatechange = function (e) {
  if(xhr.readyState === 4) {
    document.querySelector(".loader_active").style.display="none";
    let valutes = Object.entries(xhr.response.response.Valute)
    for (let el of valutes) {
      document.querySelector("#items").innerHTML += `<div class="item">
        <div class="item__code">
      ${el[1].CharCode}
  </div>
  <div class="item__value">
    ${el[1].Value}
  </div>
  <div class="item__currency">
  .руб
  </div>
  </div>`
    }
  }
}