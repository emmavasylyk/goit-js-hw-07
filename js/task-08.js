const btnRender = document.querySelector('[data-action="render"]');
const btnDestroy = document.querySelector('[data-action="destroy"]');
let boxes = document.getElementById('boxes');
btnRender.addEventListener('click', getAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getAmount() {
    const amount = document.querySelector('#controls input').value;
    console.log(amount);
    createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  let fragmentBox = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    let div = document.createElement('div');
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomColor()}`;
    fragmentBox.appendChild(div);
  }
  boxes.appendChild(fragmentBox);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  return backgroundColor;
}