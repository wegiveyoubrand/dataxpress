const menuToggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

const intro = document.querySelector(".intro");

const btnScrollToTop = document.querySelector(".scroll-to-top");

const goToHomes = document.querySelectorAll(".company");
goToHomes.forEach((gotoHome) => {
  gotoHome.addEventListener("click", () => {
    location.href = "./index.html";
  });
});

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

setTimeout(slideUp, 2300);

function slideUp() {
  intro.classList.add("close");
  console.log("oo");
}

const home = document.querySelectorAll(".company");
home.forEach((redirect) => {
  redirect.onclick(), location.href(index.html);
});
