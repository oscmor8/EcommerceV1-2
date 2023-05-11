// function navSlide() {
//   const burger = document.querySelector(“.burger-menu”);
//   const nav = document.querySelector(“.nav-links”);
//   function showNavBar() {
//     nav.classList.toggle(“nav-activate”);
//   }
//   burger.addEventListener(“click”, showNavBar);
// }
// navSlide();
const slider = document.querySelector(".slider");
var sectionIndex = 0; // set to 0 to start the slider on image 1
function updateSliderPosition() {
  const newPosition = sectionIndex * -25;
  slider.style.transform = "translate("+ newPosition + "%)";
}
// created this function to update the position on the slider based on the section index.
// newPosition variable is multiplying the section index by -25, which represents the percentage of the sliders width and the width it should be translated
// slider.style.transform moves the slider horizontally by -25%
function leftArrow() {
  if (sectionIndex > 0) {
    sectionIndex = sectionIndex - 1;
  } else {
    sectionIndex = 0;
  }
  updateSliderPosition();
}
// This function checks if index is greater than 0, which means there is a previous section to navigate to.
// if section index is greater than 0, the sectionIndex decrements by 1 when clicked
// otherwise it is set to 0 to prevent it from moving beyond the first picture.
function rightArrow() {
  if (sectionIndex < 3) {
    sectionIndex = sectionIndex + 1;
  } else {
    sectionIndex = 3;
  }
  updateSliderPosition();
}
