/* 
    https://www.interviewcake.com/question/python/permutation-palindrome?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email

    QUESTION:
        * Write an efficient function that checks whether any permutation of an input string is a palindrome .
*/


const DEBUG:boolean = false;

class MyConsole {
    log(message: string) {
        if(DEBUG)
            return message;
    }
}


class Solver {
    _data: string;
    console: MyConsole;

    constructor(stringToParse: string) {
        this._data = stringToParse;
        this.console = new MyConsole();
    }

    solve(): boolean {
        let dictionary: any = {};
        let characterArray: Array<string> = this._data.split('');
        let isOdd = (this._data.length % 2 != 0);

        this.console.log(`isOdd : ${isOdd}`);

        characterArray.forEach(element => {
            let indexCharacter: string = element.toLowerCase();
            let indexExists: boolean = dictionary[indexCharacter] != undefined;
           
            if(indexExists) {
                dictionary[indexCharacter] += 1;
            } 
            else {
                dictionary[indexCharacter] = 1;
            }
        });
        
        let result = Object.keys(dictionary).filter((_k: string) => {
            if(dictionary[_k] % 2 !== 0) {
                this.console.log(`Key : ${_k} occurs an odd number of times.`);
                return true;
            }
        });

        this.console.log(`result holds the values of : ${result}`);

        if(isOdd && result.length > 1)
            return false;
        if(!isOdd && result.length > 0)
            return false;

        return true;
    }
}

let testStringArray: Array<string> = new Array<string>("civic", "ivicc", "civil", "livci", "palindrome", "Anna", "Kayak", "Wow");

testStringArray.map((testString) => {
    let s: Solver = new Solver(testString);

    let answer = s.solve();

    console.log(`Permutation Palindrome for (${testString}) : ${answer}`);
});
