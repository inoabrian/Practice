import { Compare }  from './compare';
import { Iterator } from './iterator';

class SetIterator implements Iterator<{}> {
    begin(): any {

    }

    end(): any {

    }

    rbegin(): any {

    }

    rend(): any {

    }
}

export class Set<T> {
    _data:Array<T>;
    _comparator: Compare<T>;
    _iterator: SetIterator;

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