const form = document.getElementById("signin__form");
const btn = document.getElementById("signin__btn");
if (localStorage.getItem("login")) {
  document.querySelector("input[name=login]").value = localStorage.getItem("login");
} else{}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const formData = new FormData(form);
  xhr.open('POST','https://students.netoservices.ru/nestjs-backend/auth');
  xhr.responseType = "json";
  xhr.send(formData);
  xhr.addEventListener('load', function () {
    if (xhr.response.success === true) {
      localStorage.setItem("login", xhr.response.user_id);
      document.getElementById("welcome").classList.add("welcome_active")
      document.getElementById("user_id").textContent = xhr.response.user_id;
    } else {
        alert("Неверный логин/пароль")
    }
  })
})
