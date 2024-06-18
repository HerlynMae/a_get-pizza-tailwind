// toggle menu

//we will select the header nav and toggle menu
// const variable cannot be changed once it has been declared.

const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
const backDrop = document.querySelector(".transparent");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
  backDrop.classList.toggle("open");
});

// tabs
const tabs = document.querySelectorAll(".offer__img");
const contents = document.querySelectorAll(".offer__details");
//the purpose of this is to put an active in all images at one
// the purpose of this is to put an active in all images at one

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeActiveTab(); //remove active tab is just a variable
    tab.classList.add("active");
    const activeContent = document.querySelector(`#${tab.id}-content`); // $ it is used as its alias and used it to know the string that needs to be imported in JS and it is shorthand for the getElementByID method
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

//remove active tab is just a variable
function removeActiveTab() {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}

// accordion

//we will select all the h4 in dropdown__item
const dropdowns = document.querySelectorAll("h4");
// const icon = document.querySelector("i");

// forEach in JS is looping which means we will iterate the array
// or it will perform repeatedly since we have 3 accordion
// loop used to repeat a set of instructions
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    dropdown.nextElementSibling.classList.toggle("open");
    //we will select each icon so that we can rotate the icon once we click the question
    dropdown.querySelector("i").classList.toggle("open");
    // icon.classList.toggle("open");
  });
});

// slider
var slider = tns({
  container: ".feedback__slider",
  items: 3,
  gutter: 100,
  slideBy: "page",
  autoplay: true,
  controls: false,
  nav: false,
  autoplayButtonOutput: false,
  responsive: {
    1250: {
      items: 3,
    },
    200: {
      items: 1,
    },
  },
});
