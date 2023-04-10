const rotator = document.querySelector(".rotator");
const rotatorAll = document.querySelectorAll(".rotator__case")
rotatorAll.forEach((el)=>{
  el.style.color = el.getAttribute("data-color")
})

function rotate (rotatorCaseActive) {
  if (rotator.lastElementChild === rotatorCaseActive) {
    rotatorCaseActive.classList.remove("rotator__case_active")
    rotator.firstElementChild.classList.add("rotator__case_active");
    return
  }
  rotatorCaseActive.classList.remove("rotator__case_active")
  rotatorCaseActive.nextElementSibling.classList.add("rotator__case_active")
}

setInterval (() => {
  const rotatorCaseActive = document.querySelector(".rotator__case_active");
  rotate (rotatorCaseActive)
}, 1000)
