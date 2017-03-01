export class Set<T> {
    _data:Array<T>;

    constructor() {

    }

    public add(val: T) {
        this._data.push(val);
    }
}