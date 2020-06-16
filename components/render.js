let draw = (dims) => {
    let initNode = (i, j) => {
        let node = document.createElement('td');
        node.setAttribute('id', `${i}-${j}`);
        node.classList.add('node');
        node.classList.add('not-visited');
        document.getElementById(`tr${i}`).appendChild(node);
    };    
    for (let i = 0; i < dims.rows; i++) {
        let row = document.createElement('tr');
        row.setAttribute('id', `tr${i}`);
        document.getElementById('grid').appendChild(row);
        for (let j = 0; j < dims.cols; j++) { initNode(i, j); }
    }
};

let visit = (pos) => {
    let node = document.getElementById(`${pos.Y}-${pos.X}`);
    node.classList.remove('not-visited');
    node.classList.add('visited');
};

let obstruct = (id) => {
    let node = document.getElementById(id);
    node.classList.remove('not-visited');
    node.classList.add('obstacle');
};

let traverse = (pos) => {
    let node = document.getElementById(`${pos.Y}-${pos.X}`);
    node.classList.remove('not-visited');
    node.classList.add('path');
};

let start = (id) => {
    let node = document.getElementById(id);
    node.classList.remove('not-visited');
    node.classList.remove('obstacle');
    node.classList.add('start');
};

let end = (id) => {
    let node = document.getElementById(id);
    node.classList.remove('not-visited');
    node.classList.remove('obstacle');
    node.classList.add('end');
};

let purge = (id) => {
    let node = document.getElementById(id);
    node.classList.remove('obstacle');
    node.classList.remove('end');
    node.classList.remove('start')
    node.classList.add('not-visited');
};

export { draw, visit, obstruct, traverse, start, end, purge };