// Ocultar/mostrar el navbar cuando se navega hacia abajo
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px"; // Oculta el navbar
  } else {
    navbar.style.top = "0"; // Muestra el navbar
  }
  lastScrollTop = scrollTop;
});
