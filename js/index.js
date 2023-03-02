const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMainList = document.querySelector(".nav-main_list");
const barOne = document.querySelector("#bar-one");
const barTwo = document.querySelector("#bar-two");
const barThree = document.querySelector("#bar-three");

hamburgerMenu.addEventListener("click", () => {
  navMainList.classList.toggle("show");

  barOne.classList.toggle("bar-one");
  barTwo.classList.toggle("bar-two");
  barThree.classList.toggle("bar-three");
});
