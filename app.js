const defColor = '#000000';
let curColor = defColor;

const defSize = 50;
let curSize = defSize;

const mainContent = document.querySelector('#mainContent');
const container = document.querySelector('.container');

const resetButton = document.querySelector('#etchReset');
resetButton.addEventListener('click', reset);
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('mouseover', addStatus));
buttons.forEach(button => button.addEventListener('mouseout', removeStatus));

const picker = document.querySelector('input#picker');
picker.oninput = (e) => changeActiveColor(e.target.value);
picker.addEventListener('mouseover', addStatus);
picker.addEventListener('mouseleave', removeStatus);

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

function createGrid (size) {
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  mainContent.appendChild(container);
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

function changeActiveColor (newColor) {
  curColor = newColor;
  container.style.boxShadow = `0 0 6px 3px ${curColor}`;
}

function reset () {
  container.innerHTML = '';
  createGrid(curSize);
}

function addStatus (e) {
  e.target.classList.add('active');
}

function removeStatus (e) {
  e.target.classList.remove('active');
}

window.onload = () => {
  createGrid(defSize);
}