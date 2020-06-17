let draw = (dims) => {
    let initNode = (i, j) => {
        let node = document.createElement('td');
        node.setAttribute('id', `${i}-${j}`);
        node.className = 'node not-visited';
        document.getElementById(`tr${i}`).appendChild(node);
    };    
    for (let i = 0; i < dims.rows; i++) {
        let row = document.createElement('tr');
        row.setAttribute('id', `tr${i}`);
        document.getElementById('grid').appendChild(row);
        for (let j = 0; j < dims.cols; j++) { initNode(i, j); }
    }
};

let visit = (pos) => document.getElementById(`${pos.Y}-${pos.X}`).className = 'node visited';

let obstruct = (id) => document.getElementById(id).className = 'node obstacle';

let traverse = (pos) => document.getElementById(`${pos.Y}-${pos.X}`).className = 'node path';

let start = (id) => document.getElementById(id).className = 'node start';

let end = (id) => document.getElementById(id).className = 'node end';

let purge = (id) => document.getElementById(id).className = 'node not-visited';

export { draw, visit, obstruct, traverse, start, end, purge };