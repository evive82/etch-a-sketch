const canvas = document.getElementById(`canvas`);
const resetBtn = document.getElementById(`reset-btn`);
const setBtn = document.getElementById(`set-btn`);
let pixelRes = 64;

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

function setPixelRes() {
  let pixelNum = prompt(`How many pixels should there be on each side?`);
  if (isNaN(pixelNum)) {
    setPixels();
  } else {
    return pixelNum;
  }
}

resetBtn.addEventListener(`click`, () => {
  let pixelNum = setPixelRes();
  if (pixelNum < 1 || !pixelNum) return;
  createCanvas(pixelNum);
})

createCanvas(pixelRes);