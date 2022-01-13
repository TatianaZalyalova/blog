import "./css/slider.scss";

let slideIndex = 1;
const nextArrow = document.querySelector(".slider__next");
const previousArrow = document.querySelector(".slider__previous");

function showSlides(n) {
  const slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function nextSlide() {
  showSlides((slideIndex += 1));
}

function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

nextArrow.addEventListener("click", nextSlide);
previousArrow.addEventListener("click", previousSlide);
showSlides(slideIndex);
