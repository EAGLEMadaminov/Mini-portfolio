const elBtnContainer = document.querySelector(".btn-container");
const elContents = document.querySelectorAll(".content");
const elBtns = document.querySelectorAll(".btn");

elBtnContainer.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  elContents.forEach((content) => {
    content.classList.remove("active");
    if (id === content.id) {
      content.classList.add("active");
    }
  });
  elBtns.forEach((btn) => {
    btn.classList.remove("active");
    if (id === btn.dataset.id) {
      btn.classList.add("active");
    }
  });
});
