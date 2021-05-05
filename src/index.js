const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

const btnScrollToTop = document.querySelector(".scroll-to-top");

btnScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
menuToggle.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  header.classList.toggle("fixed");
  menuToggle.classList.toggle("active");
});

const home = document.querySelectorAll(".company");
home.forEach((redirect) => {
  redirect.onclick(), location.href(index.html);
});
