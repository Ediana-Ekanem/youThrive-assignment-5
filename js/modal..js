const displayModal = document.querySelector("#show-modal");
const displayBackDrop = document.querySelector(".modal-backdrop");
const closeModal = document.querySelector(".close-modal");

displayModal.addEventListener("click", () => {
  displayBackDrop.classList.remove("modal-backdrop");
  displayBackDrop.classList.add("hide-modal");
});

closeModal.addEventListener("click", () => {
  closeModal.classList.add("hide-modal");
  closeModal.classList.remove("modal-backdrop");
});
