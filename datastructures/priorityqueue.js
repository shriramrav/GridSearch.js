export default class PriorityQueue {
    items;
    list;
    
    constructor() {
        this.items = [];
        this.list = [];
    }

    add = (item, val) => {
        let test = false;
        for (let i = 0; i < this.list.length; i++) {
            if (val < this.list[i]) {
                this.list.splice(i, 0, val);
                this.items.splice(i, 0, item);

                test = true;     
                break; 
            }        
        }
        if (!test) {
            this.list.push(val);
            this.items.push(item);
        }
    };

    peek = () => (this.isEmpty()) ? null : this.items[0];
    
    poll = () => {
        if (this.isEmpty()) {
            return null;
        } else {
            this.list.shift();
            return this.items.shift();
        }
    };

    size = () => this.list.length;

    isEmpty = () => (this.list.length == 0) ? true : false;

    contains = (item) => {
        for (let i = 0; i < this.list.length; i++) {
            if (this.isEqual(this.items[i], item)) return true;
        }
        return false;
    };

    isEqual = (key1, key2) => (JSON.stringify(key1) === JSON.stringify(key2)) ? true : false;

    remove = (item) => {
        for (let i = 0; i < this.list.length; i++) {
            if (this.isEqual(this.items[i], item)) {
                this.items.splice(i, 1);
                this.list.splice(i, 1);
                break;
            }
        }
    };
}