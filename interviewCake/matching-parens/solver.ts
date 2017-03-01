import { Stack } from './stack';

interface Correct {
    parsedIndex : number;
}

class Solver {
    stringToParse: string;
    answer: Correct;

    constructor(data: string, answ: Correct) {
        this.stringToParse = data;
        this.answer = answ;
    }

    solve(): Correct {
        let stack:Stack<{}> = new Stack(100 * 10000);

        let charArray:Array<string> = this.stringToParse.split('');

        let missingIndex:number = -1;

        charArray.forEach((element, indx, arr) => {
            // Push the Parenthesis
            // Until we match a closing parenthesis.
            if(element === '(') {
                stack.push(indx);
            }

            //  Pop a parenthesis
            //  We have matched atleast one parenthesis
            if(element === ')') {
                stack.pop();
            }
        });

        let answer:number = Number(stack.peek());

        console.log(answer);

        this.answer = {parsedIndex : answer};
        
        return this.answer;
    }
}

let s: Solver = new Solver(
        "Sometimes (when I nest them (my parentheticals) too much (like this (and this)) they get confusing.", 
        { parsedIndex: 10 }
    );

console.log(s.solve());