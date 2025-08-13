document.getElementById("hamburger-show").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("phone-nav").classList.toggle("show");
});

document.getElementById("hamburger-close").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("phone-nav").classList.toggle("show");
});

const buttons = document.querySelectorAll(".phone__navbar-link");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    document.getElementById("phone-nav").classList.toggle("show");
  });
});
