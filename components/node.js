export default class Node {
    constructor() {
        this.start = false;
        this.end = false;
        this.enabled = true;
        this.visited = false;
        this.prevNode = null;
    }
    
    isStart = () => this.start;
    
    setStart = (t) => {
        this.start = t;
        this.chkT(t);
    };
    
    setEnd = (t) => {
        this.end = t;
        this.chkT(t);
    };
    
    isEnd = () => this.end;
    
    setEnabled = (t) => this.enabled = t;
    
    isEnabled = () => this.enabled;

    isVisited = () => this.visited;

    setVisited = (t, prev) => {
        this.visited = t;
        this.prevNode = prev;
    };

    prev = () => this.prevNode;

    setPrev = (pos) => this.prevNode = pos;

    close = () => this.visited = true;

    chkT = (t) => this.setEnabled((t == true) ? false : true);

    reset = () => {
        this.start = false;
        this.end = false;
        this.enabled = true;
        this.visited = false;
        this.prevNode = null;
    };
}