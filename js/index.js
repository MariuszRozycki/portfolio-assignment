const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMainList = document.querySelector(".nav-main_list");
const barOne = document.querySelector("#bar-one");
const barTwo = document.querySelector("#bar-two");
const barThree = document.querySelector("#bar-three");
const modal = document.querySelector(".modal");

hamburgerMenu.addEventListener("click", () => {
  navMainList.classList.toggle("show");
  hamburgerMenu.classList.toggle("hamburger-on");
  modal.classList.toggle("modal-on");
  barOne.classList.toggle("bar-one");
  barTwo.classList.toggle("bar-two");
  barThree.classList.toggle("bar-three");

  document.addEventListener("click", function (event) {
    if (
      event.target.matches(".modal")
    ) {
      closeModal()
    }
  },
    false
  )

  function closeModal() {
    modal.classList.remove("modal-on");;
    navMainList.classList.remove("show");
    hamburgerMenu.classList.remove("hamburger-on");
    barOne.classList.remove("bar-one");
    barTwo.classList.remove("bar-two");
    barThree.classList.remove("bar-three");
  }
});


