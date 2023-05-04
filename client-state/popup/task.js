const modal = document.querySelector(".modal")
if (getCookie('modal') !== 'closed'){
  modal.classList.add("modal_active")
} else {
  modal.classList.remove("modal_active")
}
const modalClose = document.querySelector(".modal__close")
modalClose.addEventListener("click",close)

function getCookie (name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(p => p.startsWith(name + '='))
  if (cookie === undefined) {
    return false
  }
  return cookie.substring(name.length +1)
} 
function close () {
  modal.classList.remove("modal_active")
  document.cookie = 'modal' + '=' + encodeURIComponent('closed');
  getCookie ('modal')
}

