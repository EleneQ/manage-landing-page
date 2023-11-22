const mobileMenu = document.querySelector(".mobile-menu");
const primaryNav = document.getElementById("primary-navigation");
const submitBtn = document.getElementById("submit-btn");

mobileMenu.addEventListener("click", () => {
  const expanded = mobileMenu.getAttribute("aria-expanded") === "true";
  mobileMenu.setAttribute("aria-expanded", String(!expanded));

  mobileMenu.classList.toggle("active");
  primaryNav.classList.toggle("active");

  document.body.classList.toggle("overlay-active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
