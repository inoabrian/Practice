/*
    https://www.interviewcake.com/question/python/bracket-validator?

    QUESTION:
    You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
    Let's say:

    '(', '{', '[' are called "openers."
    ')', '}', ']' are called "closers."
    Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.
*/

class Solver {
    constructor() {}

    solve(data: string): boolean {
        let tokens = data.split('');
        let brackets = [];
        for(let i = 0; i < tokens.length; i++) {
            if(tokens[i] === '[' || tokens[i] === '{' || tokens[i] === '(') {
                brackets.push(tokens[i]);
            } else {
                if(tokens[i] === ']') {
                    if(tokens.indexOf('[') != -1 && tokens.indexOf('[') === tokens.length -1) {
                        tokens.pop();
                    }
                } else if(tokens[i] === '}') {
                    if(tokens.indexOf('{') != -1 && tokens.indexOf('{') === tokens.length -1) {
                        tokens.pop();
                    }
                } else if(tokens[i] === ')') {
                    if(tokens.indexOf('(') != -1 && tokens.indexOf('(') === tokens.length -1) {
                        tokens.pop();
                    }
                }
            }
        }

        if(tokens.length > 0) { 
            return false;
        }

        return true;
    }
}