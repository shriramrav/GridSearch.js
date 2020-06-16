import Grid from './components/grid.js';
import * as Nodes from './components/render.js';
import A_Star from './algorithms/a-star.js';
import BFS from './algorithms/bfs.js';
import Stack from './datastructures/stack.js';

let grid;

let init = () => {
    const dims = { rows: 44, cols: 77 };
    grid = new Grid(dims);
    Nodes.draw(dims);
};

let run = () => {
    // BFS.search(grid);
    A_Star.search(grid);
};

let animate = (visited) => {
    const VISIT_SPEED = 5;
    const PATH_SPEED = 20;
    const DELAY = 20;
    visited.pop();
    (function loop() {
        setTimeout(() => {
            Nodes.visit(visited.shift());
            if (visited.length != 0) loop();
            else {
                let stack = new Stack();
                let temp = grid.getEndNode().prev();
                while (!grid.getNode(temp).isStart()) {
                    stack.push(temp);
                    temp = grid.getNode(temp).prev();
                }
                setTimeout(() => {
                    (function path() {
                        setTimeout(() => {
                            Nodes.traverse(stack.pop());
                            if (!stack.isEmpty()) {
                                path();
                            }
                        }, PATH_SPEED);
                    })();
                }, DELAY);
            }
        }, VISIT_SPEED);
    })();
};

let mouseHold = false;
let prevID = '';
let start_end = [false, false];

let findIndex = () => {
    for (let i = 0; i < start_end.length; i++) {
        if (!start_end[i]) return i;
    }
    return -1;
};

let asPos = (id) => {
    const str = id.split('-');
    return { X: parseInt(str[1]), Y: parseInt(str[0]) };
};

let update = (e) => {
    if (prevID !== e.target.id) {
        let temp = findIndex();
        const pos = asPos(e.target.id);
        switch (temp) {
            case (0):
                grid.setStart(pos);
                Nodes.start(e.target.id);
                start_end[0] = true;
                break;
            case (1):
                grid.setEnd(pos);
                Nodes.end(e.target.id);
                start_end[1] = true;
                break;
            case (-1):
                if (grid.getNode(pos).isEnabled()) {
                    grid.getNode(pos).setEnabled(false);
                    Nodes.obstruct(e.target.id);
                } else {
                    if (grid.getNode(pos).isStart())  {
                        grid.getNode(pos).setStart(false);
                        start_end[0] = false;
                    }
                    else if (grid.getNode(pos).isEnd()) {
                        grid.getNode(pos).setEnd(false); 
                        start_end[1] = false;
                    }
                    grid.getNode(pos).setEnabled(true);
                    Nodes.purge(e.target.id);
                }
                break;
        };
        prevID = e.target.id;
    }
};

document.addEventListener('mousedown', (e) => {
    if (e.target.tagName === 'TD') {
        update(e);
        mouseHold = true;
    }
});

document.addEventListener('mouseup', (e) => {
    mouseHold = false;
    prevID = null;
});

document.addEventListener('mousemove', (e) => {
    if (e.target.tagName === 'TD') {
        if (mouseHold) update(e);
    }
});

window.init = init;
window.run = run;
window.animate = animate;
