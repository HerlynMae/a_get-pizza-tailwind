//we will select the header nav and toggle menu
// const variable cannot be changed once it has been declared.

const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});
