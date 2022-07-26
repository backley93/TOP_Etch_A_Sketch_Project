//reference to html size text element

const sizeDisplay = document.querySelector('.sizetext');

/* The variable etchSketch is initialized to a reference
to the button with a class of makegrid, the variable grid
is initialized to a reference of the container div with an
id of grid */

const etchSketch = document.querySelector('.makegrid');

const grid = document.querySelector('#grid');

/* The gridSize and gridArea variables are declared globally
to allow the values to be referenced in varying functions values
initialized to null */

let gridSize = null;

let gridArea = null;

/* The following event listener makes the div with id grid
visible on the webpage as well as sets the size of the divs
that will go in the container */

etchSketch.addEventListener('click', (e) => {
    if (gridSize != null) {
        grid.innerHTML = "";
    } 
    gridSize = parseInt(prompt('Enter a number up to 42.', '4'));
    console.log(gridSize);
    if (gridSize > 42) {
        alert('Number too large please enter a number less than 42.');
        return;
    }
    grid.style.visibility = 'visible';
    gridArea = gridSize * gridSize;
    sizeDisplay.textContent = `Etch-a-Sketch Size: ${gridSize} x ${gridSize}`;
});

/* The following event listener creates a grid of divs arranged
within a 500x500 container div */

etchSketch.addEventListener('click', (e) => {
    for (i = 1; i <= gridArea; i++) {
        const gridBox = document.createElement('div');
        gridBox.style.width = (1/gridSize) * 100 + '%';
        gridBox.style.height = (1/gridSize) * 100 + '%';
        gridBox.classList.add('gridbox')
        grid.appendChild(gridBox);
    }
});

// gridItems is a nodelist of the divs created on the webpage 

const gridItems = grid.childNodes;

/*event listener for the color picker element that changes the div
background color to match the value of the color picker */

const colorPick = document.querySelector('.choosecolor');

colorPick.addEventListener('change', (e) => {
    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = colorPick.value; 
        });
    });
});

/* declared and initialized a variable to the button random colors
with a class of .randomcolor, created a function that generates a random
number between 1 and 255, added an event listener that changes the
background color of the divs in the grid to a random color */

const randomColor = document.querySelector('.randomcolor');

function random() {
    let random = Math.round((Math.random()*1000), 0);
    console.log(random);
    if (random > 255 && random < 510) {
        random = random - 255;
    } else if (random > 510 && random < 765) {
        random = random - 510;
    } else if (random > 765 && random <= 999) {
        random = random - 744
    }
    return random;
}

randomColor.addEventListener('click', (e) => {
    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
        });
    });
});

/* declared and intialized a variable for the button with erasew with
a class of .eraser, added an event listner for the button that changes
the color of the divs in the grid to white */

const eraser = document.querySelector('.eraser');

eraser.addEventListener('click', (e) => {
    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = 'white';
        });
    });
});

/* Declared and initialized clearButton to the clear button element
in the html with class .clear, used an event listener to hide the grid
and remove the divs inside it */

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', (e) => {
    grid.innerHTML = "";
    sizeDisplay.textContent = 'Etch-a-Sketch Size: No sketching here!';
    grid.style.visibility = 'hidden';
});



