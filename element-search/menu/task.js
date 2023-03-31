const menuLink = document.querySelectorAll(".menu__item .menu__link");
const menuSub = Array.from(document.querySelectorAll(".menu__item .menu_sub"));
for (let link of menuLink) {
  link.onclick = function openSub() {
    if (link.nextElementSibling) {
      if (link.nextElementSibling.classList.contains("menu_active")) {
        menuSub.forEach((el) => {
          el.classList.remove("menu_active");
        });
      } else {
        menuSub.forEach((el) => {
          el.classList.remove("menu_active");
        });
        link.nextElementSibling.classList.add("menu_active");
      }
    }
  };
}

