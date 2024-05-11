function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgc = document.querySelector("body");
const txt = document.querySelector(".color");
const btn = document.querySelector(".change-color");
btn.addEventListener("click", () => {
  let randomHexColor = getRandomHexColor();
  bgc.style.backgroundColor = randomHexColor;
  txt.textContent = randomHexColor;
})