createGrid();

function createGrid () {
  const mainWrapper = document.querySelector('.mainWrapper')
  const container = document.createElement('div');
  container.classList.add('container');
  mainWrapper.appendChild(container);
  for (let i = 0; i < 4; i++) {
  let row = document.createElement('div');
  let breaker = document.createElement('div');
  row.classList.add('row');
  breaker.classList.add('breaker');
  for (let j = 0; j < 4; j++) {
      let block = document.createElement('div');
      block.classList.add('block');
      row.appendChild(block);
  };
  container.appendChild(row);
  container.appendChild(breaker);
  };
};
const gridContainer = document.querySelector('.container');
const rows = document.querySelectorAll('.row');
const blocks = document.querySelectorAll('.block');
