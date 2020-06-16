export default class Queue {
    items;
    
    constructor() { this.items = []; }

    add = (item) => this.items.push(item);

    peek = () => (this.isEmpty()) ? null : this.items[0];

    poll = () => (this.isEmpty()) ? null : this.items.shift();

    isEmpty = () => (this.items.length == 0) ? true : false;

    size = () => this.items.length;
}