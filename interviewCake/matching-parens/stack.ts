export class Stack<T> {
    private _data: Array<T>;
    
    get data():Array<T> {
        return this._data;
    }

    private capacity: number;

    constructor(cap: number) {
        console.log(`Stack Constructor`);
        this._data = [];
        this.capacity = cap;
    }

    public push(val: T):boolean {
        console.log(`Pushing the value : ${val}.`);
        this._data.push(val);
        return true;
    }

    public pop():boolean {
        if(this._data.length > 0) {
            console.log(`Popping from the stack.`);
            this._data.pop();
            return true;
        }
        console.log(`Stack is empty.`);
        return false;
    }

    public peek():T {
        console.log(`Peeking value : ${this._data[this._data.length - 1]}`);
        return this._data[this._data.length - 1];
    }

    private getCapacity(): number {
        return this.capacity - this._data.length;
    }

    private isFull(): boolean {
        console.log(`Is Full : ${this.getCapacity() === 0}.`);
        return this.getCapacity() === 0;
    }
}
