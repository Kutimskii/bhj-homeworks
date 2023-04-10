const fontSize = Array.from(document.querySelectorAll(".font-size"));
let size;

function select (evt) {
  fontSize.forEach(el => {
    el.classList.remove("font-size_active")
  })
  this.classList.add("font-size_active");
  document.querySelector(".book").classList.remove(`book_fs-${size}`)
  size = this.getAttribute("data-size");
  document.querySelector(".book").classList.add(`book_fs-${size}`)
  evt.preventDefault();
}

fontSize.forEach(el => {
  el.addEventListener('click', select)
})
