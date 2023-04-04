const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));
function deactivateContent() {
  tabs.forEach((element) => {
    element.classList.remove("tab_active");
  });
  tabsContent.forEach((element) => {
    element.classList.remove("tab__content_active");
  });
}
function activateContent(index) {
  deactivateContent();
  tabs[index].classList.add("tab_active");
  tabsContent[index].classList.add("tab__content_active");
}
tabs.forEach((element) => {
  element.onclick = () => {
    activateContent(tabs.indexOf(element));
  }
});