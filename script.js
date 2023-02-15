
// Get the button and the dropdown content

const dropdownButtons = document.querySelectorAll(".link");
const dropdownContents = document.querySelectorAll(".dropdown-menu");
const image = document.querySelector(".portfolio-img");


dropdownButtons.forEach(dropdownButton => {
  let currentDropdownMenu = dropdownButton.parentNode.querySelector(".dropdown-menu");
  dropdownButton.addEventListener("mouseenter", function(event) {
    currentDropdownMenu.style.opacity = "1";
    currentDropdownMenu.style.pointerEvents = "auto";
  });

  dropdownButton.addEventListener('mouseleave', function (event) {
    currentDropdownMenu.style.opacity = '0';
    currentDropdownMenu.style.pointerEvents = "none";
  });
})

dropdownButtons.forEach(dropdownButton => {
  let currentDropdownMenu = dropdownButton.parentNode.querySelector(".dropdown-menu");
  dropdownButton.addEventListener("click", function(event) {
    if (currentDropdownMenu.style.opacity = "1") {
      currentDropdownMenu.style.opacity = "0";
      currentDropdownMenu.style.pointerEvents = "none";
    } else return

  });
})


dropdownContents.forEach(dropdownContent => {
  dropdownContent.addEventListener('mouseenter', function(event) {
    let currentButton = event.relatedTarget
    if (currentButton.className == "link") {
      dropdownContent.style.opacity = '1'
      dropdownContent.style.pointerEvents = "auto";
    }
  });
  dropdownContent.addEventListener('mouseleave', function(event) {
    dropdownContent.style.opacity = '0'
    dropdownContent.style.pointerEvents = "none";
  })
})

