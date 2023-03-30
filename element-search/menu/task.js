const menuLink = document.querySelectorAll(".menu__item .menu__link");
const menuSub = Array.from(document.querySelectorAll(".menu__item .menu_sub"));
for (let link of menuLink) {
  link.onclick = function openSub() {
    if (link.nextElementSibling) {
      menuSub.forEach((el) => {
        el.classList.remove("menu_active");
      });
      link
        .closest("li")
        .querySelector(".menu_sub")
        .classList.add("menu_active");
    }
    if (link.closest("ul").classList.contains("menu_sub")) {
      return false;
    }
  };
}
