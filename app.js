const defColor = '#ffffff';
const defSize = 50;

const mainWrapper = document.querySelector('.mainWrapper')
const gridContainer = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');

function createGrid (size) {
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  mainWrapper.appendChild(container);
  for (let j = 0; j < size * size; j++) {
      const block = document.createElement('div');
      block.classList.add('block');
      block.addEventListener('mouseover', changeColor);
      block.addEventListener('mousedown', changeColor);
      container.appendChild(block);
  };
};

function changeColor () {

}

window.onload = () => {
  createGrid(defSize);
}