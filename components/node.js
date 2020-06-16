export default class Node {
    constructor() {
        this.start = false;
        this.end = false;
        this.enabled = true;
        this.visited = false;
        this.prevNode = null;
    }
    
    isStart() {
        return this.start;
    }
    
    setStart(t) {
        this.start = t;
        this.chkT(t);
    }
    
    setEnd(t) {
        this.end = t;
        this.chkT(t);
    }
    
    isEnd() {
        return this.end;
    }
    
    setEnabled(t) {
        this.enabled = t;
    }
    
    isEnabled() {
        return this.enabled;
    }

    isVisited() {
        return this.visited;
    }

    setVisited(t, prev) {
        this.visited = t;
        this.prevNode = prev;
    }

    prev() {
        return this.prevNode;
    }

    setPrev(pos) {
        this.prevNode = pos;
    }

    close() {
        this.visited = true;
    }

    chkT(t) {
        if (t == true) {
            this.setEnabled(false);
        } else {
            this.setEnabled(true);
        }
    } 
}