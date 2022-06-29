const defColor = '#000000';
const defSize = 50;
let curSize = defSize;

const mainWrapper = document.querySelector('.mainWrapper');
const container = document.querySelector('.container');
const resetButton = document.querySelector('button#etchReset');
resetButton.addEventListener('click', reset);
let curColor = defColor;

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid (size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  mainWrapper.appendChild(container);
  for (let j = 0; j < size * size; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.addEventListener('mouseover', colorMorph);
      block.addEventListener('mousedown', colorMorph);
      container.appendChild(block);
  };
};

function colorMorph (e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  e.target.style.backgroundColor = curColor;
}

function changeColor (newColor) {
  curColor = newColor;
}

function reset () {
  container.innerHTML = '';
  createGrid(curSize);
}

window.onload = () => {
  createGrid(defSize);
}