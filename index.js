// create a function that builds a 16x16 square grid on page load;

window.onload = genGrid(16);

function genGrid(n) {
    const container = document.querySelector('.container');
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
}

const gridCell = document.querySelectorAll('.cell');

for (let k = 0; k < gridCell.length; k++) {
    gridCell[k].addEventListener("mouseover", event => {
        event.target.style.backgroundColor = 'grey';
    })
}
