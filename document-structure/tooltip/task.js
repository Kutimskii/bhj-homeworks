const linksTooltip = [...document.getElementsByClassName("has-tooltip")];
linksTooltip.forEach((el) => {
  el.insertAdjacentHTML(
    "afterend",
    `<div class="tooltip" data-position="bottom">${el.title}</div>`
  );
});
const tooltips = [...document.getElementsByClassName("tooltip")];
linksTooltip.forEach((el) => {
  el.onclick = function showTooltip() {
    const position = el.getBoundingClientRect();
    console.log(position);
    const active = [...document.getElementsByClassName("tooltip_active")];
    if (
      active.length >= 1 &&
      !el.nextSibling.classList.contains("tooltip_active")
    ) {
      active.forEach((element) => {
        element.classList.remove("tooltip_active");
      });
      el.nextSibling.style.top = `${position.top + position.height}px`;
      el.nextSibling.style.left = `${position.left}px`;
      el.nextSibling.classList.add("tooltip_active");
      return false;
    } else if (active.length >= 1) {
      active.forEach((element) => {
        element.classList.remove("tooltip_active");
      });
      return false;
    } else {
      el.nextSibling.style.top = `${position.top + position.height}px`;
      el.nextSibling.style.left = `${position.left}px`;
      el.nextSibling.classList.add("tooltip_active");
      return false;
    }
  };
});

