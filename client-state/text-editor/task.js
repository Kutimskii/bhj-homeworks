const editor = document.getElementById("editor")
editor.value = localStorage.getItem('text')
function saveText () {
  localStorage.setItem('text',editor.value)
}
editor.addEventListener("keyup",saveText)