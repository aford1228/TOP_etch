createGrid();

function createGrid () {
  const mainWrapper = document.querySelector('.mainWrapper')
  const container = document.createElement('div');
  container.classList.add('container');
  container.style = 'display:flex;';
  mainWrapper.appendChild(container);
  for (let i = 0; i < 4; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < 4; j++) {
      let block = document.createElement('div');
      block.classList.add('block');
      row.appendChild(block);
  };
  container.appendChild(row);
  };
};
const gridContainer = document.querySelector('.container');
const rows = document.querySelectorAll('.row');
const blocks = document.querySelectorAll('.block');
