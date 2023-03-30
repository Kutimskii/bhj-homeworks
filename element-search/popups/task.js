const modal = document.getElementById('modal_main');
modal.classList.add('modal_active');
const modalClose = document.querySelectorAll('.modal__close_times');
const modalSucces = document.getElementById('modal_success');
const button = document.querySelector('.btn');

for (let closer of modalClose) {
  closer.onclick = function closeWindow () {
  modal.classList.remove('modal_active')
  modalSucces.classList.remove('modal_active')
  }
}
button.onclick = function changeColor () {
  modalSucces.classList.add('modal_active')
} 