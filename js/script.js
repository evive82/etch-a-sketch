const canvas = document.getElementById(`canvas`);
const resetBtn = document.getElementById(`reset-btn`);
const setButtons = document.querySelectorAll(`.set-btn`);
const modal = document.getElementById(`modal`);
createCanvas(16);

function clearCanvas() {
  while (canvas.lastElementChild) {
    canvas.removeChild(canvas.lastElementChild);
  }
}

function createCanvas(pixelNum) {
  clearCanvas();
  canvas.style.gridTemplateColumns = `repeat(${pixelNum}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${pixelNum}, 1fr)`;
  for (let i = 0; i < pixelNum**2; i++) {
    let pixel = document.createElement(`div`);
    pixel.classList.add(`pixels`);
    pixel.style.backgroundColor = `#5c5c5c`;
    pixel.style.opacity = 1;
    canvas.appendChild(pixel);
    pixel.addEventListener(`mouseover`, () => {
      changePixelColor(i)
    })
  }
}

function changePixelColor(index) {
  let pixel = document.querySelectorAll(`.pixels`)[index];
  let pixelOpacity = pixel.style.opacity - 0.25;
  pixel.style.opacity = pixelOpacity;
}

resetBtn.onclick = () => {
  modal.style.display = `block`;
}

setButtons.forEach((btn) => {
  btn.onclick = () => {
    let pixelNum = btn.getAttribute(`data-val`);
    createCanvas(pixelNum);
    modal.style.display = `none`;
  }
})

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = `none`;
  }
} 