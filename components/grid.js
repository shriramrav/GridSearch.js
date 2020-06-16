import Node from './node.js';

export default class Grid {

    nodes;
    startPos;
    endPos;

    constructor(dims) {
        this.nodes = new Array(dims.cols);
        for (let i = 0; i < dims.cols; i++) {
            this.nodes[i] = new Array(dims.rows);
            for (let j = 0; j < dims.rows; j++) {
                this.nodes[i][j] = new Node();
            }
        }
    }

    setStart = (pos) => {
        this.getNode(pos).setStart(true);
        this.startPos = pos;
    }

    setEnd = (pos) => {
        this.getNode(pos).setEnd(true);
        this.endPos = pos;
    }

    getStartNode = () => this.getNode(this.getStartPos());

    getNode = (pos) => this.nodes[pos.X][pos.Y];
    
    getEndNode = () => this.getNode(this.getEndPos());

    getStartPos = () => this.startPos;

    getEndPos = () => this.endPos;

    getDims = () => ({ cols: this.nodes.length, rows: this.nodes[0].length });
}