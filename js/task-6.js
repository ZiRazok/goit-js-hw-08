function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes() {
  const newBox = document.querySelectorAll(".box");
  for (let box of newBox) box.remove();
}

function createBoxes(amount) {
  if (document.querySelector(".box")) destroyBoxes();
  const strHTML = [];
  for (let i = 30; i < amount * 10 + 30; i += 10) {
    strHTML.push(`<div class="box" style="width: ${i}px; height: ${i}px; background-color: ${getRandomHexColor()};"></div>`);
  }
  divBoxes.insertAdjacentHTML("beforeend", strHTML.join(""));
}

const inputNumber = document.querySelector("#controls>input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", () => {
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    createBoxes(inputNumber.value);
    inputNumber.value = "";
  }
})

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
  inputNumber.value = "";
})