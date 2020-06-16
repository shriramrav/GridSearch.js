export default class HashMap {
    keys;
    values;

    constructor() {
        this.keys = [];
        this.values = [];
    }

    update = (key, value) => {
        let checkKey = false;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.isEqual(key, this.keys[i])) {
                this.values[i] = value;
                checkKey = true;
                break;
            }
        }
        if (!checkKey) {
            this.keys.push(key);
            this.values.push(value);
        }
    };

    get = (key) => {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.isEqual(key, this.keys[i])) {
                return this.values[i];
            }
        }
        return null;
    };

    size = () => this.keys.length;

    isEqual = (key1, key2) => (JSON.stringify(key1) === JSON.stringify(key2)) ? true : false;
}