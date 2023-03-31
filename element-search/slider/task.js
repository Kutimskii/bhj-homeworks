const rightArrow = document.querySelector(".slider__arrow_next");
const leftArrow = document.querySelector(".slider__arrow_prev");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));
function setActive(numberOfSlide) {
  let numSlide = slides.findIndex((element) => {
    return element.classList.contains("slider__item_active");
  });
  slides[numSlide].classList.remove("slider__item_active");
  dots[numSlide].classList.remove("slider__dot_active");
  if (numberOfSlide === undefined) {
    let number = numSlide;
    slides[number].classList.add("slider__item_active");
    dots[number].classList.add("slider__dot_active");
    return;
  }
  if (numberOfSlide === slides.length) {
    let number = numberOfSlide - slides.length;
    slides[number].classList.add("slider__item_active");
    dots[number].classList.add("slider__dot_active");
    return;
  }
  if (numberOfSlide < 0) {
    let number = slides.length - 1;
    slides[number].classList.add("slider__item_active");
    dots[number].classList.add("slider__dot_active");
    return;
  }
  slides[numberOfSlide].classList.add("slider__item_active");
  dots[numberOfSlide].classList.add("slider__dot_active");
}
setActive();
function nextSlide() {
  let numSlide = slides.findIndex((element) => {
    return element.classList.contains("slider__item_active");
  });
  numSlide++;
  setActive(numSlide);
}
function prevSlide() {
  let numSlide = slides.findIndex((element) => {
    return element.classList.contains("slider__item_active");
  });
  numSlide--;
  setActive(numSlide);
}
rightArrow.onclick = nextSlide;
leftArrow.onclick = prevSlide;
dots.forEach((dot) => {
  dot.onclick = function () {
    setActive(dots.indexOf(dot));
  };
});
