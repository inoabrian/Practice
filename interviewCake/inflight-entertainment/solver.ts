// https://www.interviewcake.com/question/csharp/inflight-entertainment?utm_source=weekly_email&utm_campaign=weekly_email&utm_medium=email

/*
  Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

  When building your function:

  Assume your users will watch exactly two movies
  Don't make your users watch the same movie twice
  Optimize for runtime over memory
  
*/

class Solver {
  private preferredDuration: number;
  private durationList: Array<number>;
  constructor(duration: number, movieDurations: Array<number>){ 
    this.preferredDuration = duration;
    this.durationList = movieDurations;
  }
  
  solve(): Array<number> {
    // IDEA : I would sort the list of durations and index [i][i+1] to see if they are 
    // if [i][i+1] > FLIGHT_DURATION 
    //    return [i-1][i]
    let answerIndex: Array<number> = [];
    this.durationList = this.durationList.sort();
    
    for(let i = 0; i < this.durationList.length - 2; i++) {
      if(this.durationList[i] + this.durationList[i + 1] <= this.preferredDuration) {
        answerIndex[0] = this.durationList[i];
        answerIndex[1] = this.durationList[i + 1];
      }
    }
    return answerIndex;
  }
}
