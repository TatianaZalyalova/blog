import "./css/style.scss";

const toggle = document.querySelector(".toggle");
const navClose = document.querySelector(".nav__close");
const body = document.querySelector("body");
toggle.addEventListener("click", function () {
  body.classList.add("open");
});

navClose.addEventListener("click", function () {
  body.classList.remove("open");
});
