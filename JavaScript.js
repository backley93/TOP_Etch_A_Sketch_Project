const grid = document.querySelector('.gridCont');

for (i = 0; i <= 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    grid.appendChild(gridItem);
}