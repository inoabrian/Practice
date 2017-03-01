import { Compare } from './compare';

export class Set<T> {
    _data:Array<T>;
    _comparator: Compare<T>;

    constructor() {

    }

    public add(val: T) {
        this._data.push(val);
    }

    private remove(val: T) {
        this._data = this._data.filter((element) => {
            return (val !== element);
        });
    }
}