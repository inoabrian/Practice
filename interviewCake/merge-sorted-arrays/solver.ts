/* 
    https://www.interviewcake.com/question/python/merge-sorted-arrays

    QUESTION:
    In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.
    Each order is represented by an "order id" (an integer).

    We have our lists of orders sorted numerically already, in lists. Write a function to merge our lists of orders into one sorted list.
*/

// var myArray     = [3, 4, 6, 10, 11, 15];
// var alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]

class Solver {
    private leftIndex:   number = 0;
    private rightIndex:  number = 0;
    private leftArray:   Array<number>;
    private rightArray:  Array<number>;

    private DEBUG: boolean = true;


    constructor(lArray : Array<number>, rArray: Array<number>, debugFlag?:boolean){ 
        this.leftArray = lArray;
        this.rightArray = rArray;
        this.DEBUG = debugFlag === undefined ? this.DEBUG : debugFlag;
    }

    solve(): Array<number> {
        if(this.leftArray === undefined || this.rightArray === undefined) {
            return new Array<number>();
        } else if(this.rightArray.length <= 0 || this.leftArray.length <= 0) {
            if(this.rightArray.length > 0) {
                return this.rightArray;
            } else {
                return this.leftArray;
            }
        }

        return this.mergeArrays();
    }

    private mergeArrays(): Array<number> {
        let notSorted: boolean = true;
        let mergedArray: Array<number> = new Array<number>();
        while(notSorted) {
            // Check here if both arrays have been combed through.
            if((this.leftIndex === this.leftArray.length) && (this.rightIndex === this.rightArray.length)) {
                if(this.DEBUG) {
                    console.log(`Final Case, current leftIndex: ${this.leftIndex}`);
                    console.log(`Final Case, current rightIndex: ${this.rightIndex}`);
                }
                notSorted = false;
            }

            // Edge Cases here, one array has been maxed out on index and the other has one last element.
            // We are doing it this way so we can handle mix matched lengths.
            if(this.rightIndex === this.rightArray.length) {
                if(this.leftIndex < this.leftArray.length) {
                    if(this.DEBUG) {
                        console.log(`Edge Case, current rightIndex: ${this.rightIndex}`);
                        console.log(`Edge Case, leftIndex: ${this.leftIndex}`);
                        console.log(`Edge Case, leftArray value: ${this.leftArray[this.leftIndex]}`);
                    }
                    mergedArray.push(this.leftArray[this.leftIndex]);
                    this.leftIndex++;
                }
            } else if(this.leftIndex === this.leftArray.length) {
                if(this.rightIndex < this.rightArray.length) {
                    if(this.DEBUG) {
                        console.log(`Edge Case, current leftIndex: ${this.leftIndex}`);
                        console.log(`Edge Case, rightIndex: ${this.rightIndex}`);
                        console.log(`Edge Case, rightArray value: ${this.rightArray[this.rightIndex]}`);
                    }
                    mergedArray.push(this.rightArray[this.rightIndex]);
                    this.rightIndex++;
                }
            }
            
            // Normal check here to see which is smaller and push into merged array.
            if(this.leftArray[this.leftIndex] < (this.rightArray[this.rightIndex] || this.rightArray[this.rightArray.length - 1])) {
                if(this.DEBUG) {
                    console.log(`Insert Case, leftIndex: ${this.leftIndex}`);
                    console.log(`Insert Case, leftArray value: ${this.leftArray[this.leftIndex]}`);
                }
                mergedArray.push(this.leftArray[this.leftIndex]);
                this.leftIndex++;
            } else if(this.rightArray[this.rightIndex] < (this.leftArray[this.leftIndex] || this.leftArray[this.leftArray.length - 1])) {
                if(this.DEBUG) {
                    console.log(`Insert Case, rightIndex: ${this.rightIndex}`);
                    console.log(`Insert Case, rightArray value: ${this.rightArray[this.rightIndex]}`);
                }
                mergedArray.push(this.rightArray[this.rightIndex]);
                this.rightIndex++;
            }

        }

        return mergedArray;
    }
}

var myArray     = [3, 4, 6, 10, 11, 15];
var alicesArray = [1, 5, 8, 12, 14, 19];

let s = new Solver(myArray, alicesArray, false);
console.log(s.solve());
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]