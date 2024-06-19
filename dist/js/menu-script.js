const items = document.querySelectorAll(".menu__tab");
const contents = document.querySelectorAll(".menu__item");
//the purpose of this is to put an active in all images at one
// the purpose of this is to put an active in all images at one

items.forEach((item) => {
  item.addEventListener("click", () => {
    removeActiveTab(); //remove active item is just a variable
    item.classList.add("active");
    const activeContent = document.querySelector(`#${item.id}-detail`); // $ it is used as its alias and used it to know the string that needs to be imported in JS and it is shorthand for the getElementByID method
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

//remove active item is just a variable
function removeActiveTab() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
