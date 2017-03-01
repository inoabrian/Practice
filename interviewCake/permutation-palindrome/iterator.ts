export interface Iterator<T> {
    begin   :   (() => T);
    end     :   (() => T);
    rbegin  :   (() => T);
    rend    :   (() => T);
}