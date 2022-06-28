document.body.onload = createGrid;

function createGrid () {
  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);
  for (let i = 0; i < 4; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < 4; j++) {
      let block = document.createElement('div');
      block.classList.add('grid');
      row.appendChild(block);
  };
  container.appendChild(row);
  };
};

const body = document.querySelector('body');
const gridContainer = document.querySelector('.container');
const grid = document.querySelectorAll('.grid');