const input = document.getElementById("task__input");
const addBtn = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list")
function addTask () { 
  if (input.value && !(input.value.match(/^[ ]+$/))) {
    taskList.insertAdjacentHTML('beforeend', `<div class="task">
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`)
  linksRemove = [...document.getElementsByClassName("task__remove")]
  linksRemove.forEach(el => {
    el.onclick = function remove () {
    el.parentElement.remove()
    }
  })
  input.value = "";
  return false
  }
  return false
}
addBtn.onclick = addTask
