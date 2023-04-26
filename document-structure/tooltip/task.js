const linksTooltip = [...document.getElementsByClassName("has-tooltip")];
linksTooltip.forEach(el => {
  el.insertAdjacentHTML('afterend', `<div class="tooltip" data-position="bottom">${el.title}</div>`)
})
const tooltips = [...document.getElementsByClassName("tooltip")];
linksTooltip.forEach(el => {
  el.onclick = function showTooltip () {
    tooltips.forEach(elem => {
      if (elem.classList.contains("tooltip_active")) {
        elem.classList.remove("tooltip_active")
      }
    })
    el.nextSibling.classList.add("tooltip_active")
    return false
  }
})
