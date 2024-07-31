
window.onload = newGrid(16);

function newGrid(n) {
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.style.flex = 1;
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.flex = 1;
            row.appendChild(cell);
        }
    }
    paintGrid();
}

function paintGrid() {
    const gridCell = document.querySelectorAll('.cell');        
    for (let k = 0; k < gridCell.length; k++) {
        gridCell[k].addEventListener("mouseover", event => {
            event.target.style.backgroundColor = 'black';
        });
    }
}

function eraseGrid() {
    const container = document.querySelector('.container');
    container.remove();
}

const button = document.querySelector('.new-grid');
button.addEventListener('click', () => {    
    eraseGrid();
    let number = prompt('How many squares per side of the grid, from 16 to 100?');
    if (number < 16 || number > 100) {
        alert('Invalid number! Refresh page and try again.');
    } else {
        newGrid(number);
    }
});





