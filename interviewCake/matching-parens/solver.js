"use strict";
const stack_1 = require('./stack');
class Solver {
    constructor(data, answ) {
        this.stringToParse = data;
        this.answer = answ;
    }
    solve() {
        let stack = new stack_1.Stack(100 * 10000);
        let charArray = this.stringToParse.split('');
        let missingIndex = -1;
        charArray.forEach((element, indx, arr) => {
            if (element === '(') {
                stack.push(indx);
            }
            if (element === ')') {
                stack.pop();
            }
        });
        let answer = Number(stack.peek());
        console.log(answer);
        this.answer = { parsedIndex: answer };
        return this.answer;
    }
}
let s = new Solver("Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing.", { parsedIndex: 79 });
console.log(s.solve());
//# sourceMappingURL=solver.js.map