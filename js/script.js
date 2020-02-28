const canvas = document.getElementById(`canvas`);
const resetBtn = document.getElementById(`reset-btn`);

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
    canvas.appendChild(pixel);
    pixel.addEventListener(`mouseover`, () => {
      changePixelColor(i)
    })
  }
}

function changePixelColor(index) {
  let pixel = document.querySelectorAll(`.pixels`);
  pixel[index].style.backgroundColor = `black`;
}

resetBtn.addEventListener(`click`, () => {
  let pixelNum = prompt(`How many pixels should there be on each side?`);
  if (isNaN(pixelNum)) pixelNum = prompt(`Please enter only numbers`);
  createCanvas(pixelNum);
})

canvas.addEventListener(`click`, (e) => {
  console.log(e);
  console.log(e.target.dataset);
})

createCanvas(128);