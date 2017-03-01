export class Compare<T> {
    _type: string;

    constructor(t: T) {
        this._type = typeof t;
    }

    compare(a: T, b: T):number {
        switch(this._type) {
            case 'string':
                return this.compareString(a.toString(), b.toString());
            case 'number':
                return this.compareNumber(Number(a), Number(b));
            default:
                return this.compareObject(a, b);
        }
    }

    private compareString(a: string, b:string):number {
        return a.charCodeAt(0) - b.charCodeAt(0);
    }

    private compareNumber(a: number, b: number):number {
        return a - b;
    }

    private compareObject(a: Object, b: Object) {
        return -1;
        // throw new Error("Not yet implemented!");
    }
}