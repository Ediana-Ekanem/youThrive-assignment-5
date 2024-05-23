document.addEventListener("DOMContentLoaded", function () {
  const optionMenu = document.querySelector(".select-menu");
  const selectBtn = optionMenu.querySelector(".select-btn a");
  const options = optionMenu.querySelectorAll(".option a");

  selectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    optionMenu.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedText = option.querySelector(".text").textContent;
      const btnText = selectBtn.querySelector("span");
      btnText.textContent = selectedText;
      optionMenu.classList.remove("active");
    });
  });
});
