let mainItem = document.querySelectorAll(".main-item");
let btn = document.querySelectorAll(".main-item__button");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    mainItem[i].classList.add("hidden");
  });
}
