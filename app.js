const DEFAULT_COLOR = '#000000';
let curColor = DEFAULT_COLOR;

const DEFAULT_SIZE = 50;
let curSize = DEFAULT_SIZE;

const mainContent = document.querySelector('#mainContent');
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const resetButton = document.querySelector('#etchReset');
resetButton.addEventListener('click', reset);
const picker = document.querySelector('input#picker');
picker.oninput = (e) => changeActiveColor(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid (size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
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

function changeActiveColor (newColor) {
  curColor = newColor;
  container.style.boxShadow = `0 0 6px 3px ${curColor}`;
}

function reset () {
  container.innerHTML = '';
  createGrid(curSize);
}

function toggleStatus(e) {
  e.target.classList.toggle('active');
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
}