function createPifTable(rows, cols) {
    const table = document.createElement('table');
    table.classList.add('pif-table');

    for (let i = 0; i <= rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j <= cols; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j === 0) {
                cell.textContent = '';
            } else if (i === 0) {
                cell.textContent = j;
            } else if (j === 0) {
                cell.textContent = i;
            }
            else {
                cell.textContent = i * j;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    document.getElementById('pif-table-container').appendChild(table);
}
createPifTable(10, 10);

