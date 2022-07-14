//Reference to the etch-a-sketch container

const grid = document.querySelector('.gridCont');

//Function for creating grid

let gridSize = null;

let gridArea = null;

let itemSize = null;

const changeGrid = document.querySelector('.change');

changeGrid.addEventListener('click', (e) => {
    gridSize = prompt('Input a number.', '4');
    gridSize = parseInt(gridSize);
    if (gridSize > 100) {
        alert('Grid can\'t be larger than 100 x 100.');
        return;
    }
    gridArea = gridSize * gridSize;
    itemSize = (1/gridSize) * 100 + '%';
    for (i = 1; i <= gridArea; i++) {
    const gridItem = document.createElement('div');
    gridItem.style.width = itemSize;
    gridItem.style.height = itemSize;
    grid.appendChild(gridItem);
}});






// gridItem.classList.add('gridItem');