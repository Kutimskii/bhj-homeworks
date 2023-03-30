const rightArrow = document.querySelector(".slider__arrow_next");
const leftArrow = document.querySelector(".slider__arrow_prev");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));
let numberOfSlide = 0;
let numberOfDot = 0;
dots[numberOfDot].classList.add("slider__dot_active");
function nextSlide() {
  numberOfSlide = slides.findIndex((element) => {
    return element.classList.contains("slider__item_active");
  });
  numberOfDot = numberOfSlide;
  slides[numberOfSlide].classList.remove("slider__item_active");
  dots[numberOfDot].classList.remove("slider__dot_active");
  numberOfSlide++;
  if (numberOfSlide === slides.length) {
    numberOfSlide = 0;
  }
  numberOfDot = numberOfSlide;
  slides[numberOfSlide].classList.add("slider__item_active");
  dots[numberOfDot].classList.add("slider__dot_active");
}
function prevSlide() {
  numberOfSlide = slides.findIndex((element) => {
    return element.classList.contains("slider__item_active");
  });
  numberOfDot = numberOfSlide;
  slides[numberOfSlide].classList.remove("slider__item_active");
  dots[numberOfDot].classList.remove("slider__dot_active");
  if (numberOfSlide === 0) {
    numberOfSlide = 5;
  }
  numberOfSlide--;
  numberOfDot = numberOfSlide;
  slides[numberOfSlide].classList.add("slider__item_active");
  dots[numberOfDot].classList.add("slider__dot_active");
}
rightArrow.onclick = nextSlide;
leftArrow.onclick = prevSlide;
dots.forEach((dot) => {
  dot.onclick = function setDot() {
    slides[numberOfDot].classList.remove("slider__item_active");
    dot
      .closest(".slider__dots")
      .querySelector(".slider__dot_active")
      .classList.remove("slider__dot_active");
    dot.classList.add("slider__dot_active");
    numberOfDot = dots.findIndex((element) => {
      return element.classList.contains("slider__dot_active");
    });
    slides[numberOfDot].classList.add("slider__item_active");
  };
});
let fff = document.getElementsByClassName('.slider__item')
console.log(fff);

