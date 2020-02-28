const canvas = document.getElementById(`canvas`);
const resetBtn = document.getElementById(`reset-btn`);

function createCanvas(pixelNum) {
  canvas.style.gridTemplateColumns = `repeat(${pixelNum}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${pixelNum}, 1fr)`;
  for (let i = 0; i < pixelNum**2; i++) {
    let pixel = document.createElement(`div`);
    pixel.classList.add(`pixels`);
    canvas.appendChild(pixel);
  }
}

function clearCanvas() {
  while (canvas.lastElementChild) {
    canvas.removeChild(canvas.lastElementChild);
  }
}

resetBtn.addEventListener(`click`, () => {
  let pixelNum = prompt(`How many pixels should there be on each side?`);
  if (isNaN(pixelNum)) pixelNum = prompt(`Please enter only numbers`);
  clearCanvas();
  createCanvas(pixelNum);
})

createCanvas(16);