// primary layout devices
const mainContent = document.querySelector('#mainContent');
const container = document.querySelector('#container');
const slider = document.querySelector('.slider');

// default settings values
const DEFAULT_SIZE = 50;
const DEFAULT_MODE = 'monocolor';
let curSize = DEFAULT_SIZE;
let curMode = DEFAULT_MODE;

// button actions
const picker = document.querySelector('#picker');
picker.oninput = (e) => changeActiveColor(e.target.value);

const resetButton = document.querySelector('#etchReset');
resetButton.addEventListener('click', reset);

const monoButton = document.querySelector('#monocolor');
monoButton.addEventListener('click', changeMode('monocolor'));

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', changeMode('rainbow'));

const eraserButton = document.querySelector('#eraser');
eraserButton.addEventListener('click', changeMode('eraser'));

let curColor = picker.value;

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

function changeMode (newMode) {
  buttonMode(newMode);
  curMode = newMode;
}

function buttonMode(newMode) {
  if (curMode === 'monocolor') {
    monoButton.classList.remove('active')
  }
  else if (curMode === 'rainbow') {
    rainbowButton.classList.remove('active')
  }
  else if (curMode === 'eraser') {
    eraserButton.classList.remove('active')
  }

  if (newMode === 'monocolor') {
    monoButton.classList.add('active')
  }
  else if (newMode === 'rainbow') {
    rainbowButton.classList.add('active')
  }
  else if (newMode === 'eraser') {
    eraserButton.classList.add('active')
  };
}

function colorMorph (e) {
  if (e.type === 'mouseover' && !mouseDown) return;
  if (curMode === 'monocolor') {
    e.target.style.backgroundColor = curColor;
  }
  else if (curMode === 'rainbow') {
    let r = ~~((Math.random()) * 256);
    let g = ~~((Math.random()) * 256);
    let b = ~~((Math.random()) * 256);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }
  else if (curMode === 'eraser') {
    e.target.style.backgroundColor = '#f5f5f5';
  }
}

function changeActiveColor (newColor) {
  curColor = newColor;
}

function reset () {
  container.classList.toggle('shake');
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => setTimeout(block.classList.toggle('disappear'), 1000));
  setTimeout(() => container.classList.toggle('shake'), 1000);
  setTimeout(() => container.innerHTML = '', 900);
  setTimeout(() => createGrid(curSize), 1000);
}

window.onload = () => {
  createGrid(DEFAULT_SIZE);
}