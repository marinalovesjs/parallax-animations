// Инициализация Paroller.js — параллакс при скролле
$(document).ready(function () {
  $(".paroller").paroller();
});

// Инициализация Parallax.js — параллакс при движении мыши в hero
const scene = document.getElementById("scene");
if (scene) {
  new Parallax(scene, {
 frictionX: 0.05,
    frictionY: 0.05
  });
}
// Плавный скролл к первой секции
const scrollBtn = document.getElementById("scrollDown");
const firstSection = document.querySelector(".section");

if (scrollBtn && firstSection) {
  scrollBtn.addEventListener("click", () => {
    firstSection.scrollIntoView({ behavior: "smooth" });
  });
}
