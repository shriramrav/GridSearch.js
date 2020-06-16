export default class Stack {
    items;
    
    constructor() { this.items = []; }

    push = (item) => this.items.push(item);

    peek = () => (this.isEmpty()) ? null : this.items[this.items.length - 1];

    pop = () => (this.isEmpty()) ? null : this.items.pop();

    isEmpty = () => (this.items.length == 0) ? true : false;

    size = () => this.items.length;
}