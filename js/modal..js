const displayModalButton = document.querySelector("#show-modal");
const displayBackDrop = document.querySelector(".modal-backdrop");
const closeModalButton = document.querySelector(".close-modal");

displayModalButton.addEventListener("click", () => {
  displayBackDrop.classList.add("display-modal");
});

closeModalButton.addEventListener("click", () => {
  displayBackDrop.classList.remove("display-modal");
});
