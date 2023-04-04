let dropValue = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const dropLink = Array.from(document.querySelectorAll(".dropdown__link"));
function clicker() {
  dropList.classList.contains("dropdown__list_active")
    ? dropList.classList.remove("dropdown__list_active")
    : dropList.classList.add("dropdown__list_active");
}
dropValue.addEventListener("click", clicker);
function setLink(el) {
  dropValue.textContent = el.textContent;
  dropList.classList.remove("dropdown__list_active");
}
dropLink.forEach((el) => {
  el.onclick = function () {
    setLink(el);
    return false;
  };
});
