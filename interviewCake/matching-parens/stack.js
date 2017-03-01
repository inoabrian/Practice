"use strict";
class Stack {
    constructor(cap) {
        console.log(`Stack Constructor`);
        this._data = [];
        this.capacity = cap;
    }
    get data() {
        return this._data;
    }
    push(val) {
        console.log(`Pushing the value : ${val}.`);
        this._data.push(val);
        return true;
    }
    pop() {
        if (this._data.length > 0) {
            console.log(`Popping from the stack.`);
            this._data.pop();
            return true;
        }
        console.log(`Stack is empty.`);
        return false;
    }
    peek() {
        console.log(`Peeking value : ${this._data[this._data.length - 1]}`);
        return this._data[this._data.length - 1];
    }
    getCapacity() {
        return this.capacity - this._data.length;
    }
    isFull() {
        console.log(`Is Full : ${this.getCapacity() === 0}.`);
        return this.getCapacity() === 0;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map