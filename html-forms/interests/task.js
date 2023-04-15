const interests = [...document.querySelectorAll(".interest .interest__check")];
const interestsChild = document.querySelectorAll("ul.interests .interest__check");
function changeCheck (event) {
  const childs = [...event.srcElement.closest("li")
  .querySelector("ul")
  .querySelectorAll(".interest .interest__check")];
  if (event.srcElement.checked) {
    childs.forEach((el) => {
      el.checked = true;
      });
  } else {
    childs.forEach((el) => {
      el.checked = false;
      });
  }
}
  interests.forEach((el) => {
  el.addEventListener("change", changeCheck);
  });