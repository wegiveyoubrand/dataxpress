const goToHomes = document.querySelectorAll(".company");
goToHomes.forEach((gotoHome) => {
  gotoHome.addEventListener("click", () => {
    location.href = "/index.html";
  });
});
