const defColor = '#000000';
const defSize = 50;

const mainWrapper = document.querySelector('.mainWrapper');
const container = document.querySelector('.container');
let curColor = defColor;

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
  e.target.classList.add('filled');
  e.target.style.backgroundColor = curColor;
}

function changeColor (newColor) {
  curColor = newColor;
}

window.onload = () => {
  createGrid(defSize);
}