// my solution

function checkExam(correctAnswers, studentAnswers) {
 //start with a score of 0
var score = 0;
  //loop through the array of correct answer
  for(var i = 0; i < correctAnswers.length; i++) { 
      //if the answer matches the students answer add 4 to the score
      if(correctAnswers[i] === studentAnswers[i]){
      score += 4;
      }
      //if the student has an empty string for an answer, add nothing to the score
      else if(studentAnswers[i] === ""){
      score -= 0;
      }
      //if the student has an answer that is not correct and not an empty string, deduct 1 point from their score
      else {
      score -= 1
      }
  }
  //if the score is a negative number (below 0), just return 0 as the score
  if(score < 0){
  score = 0;
  };
  return score;
};



// other solutions

function checkExam(array1, array2) {
  const reducer = (a, e, idx) => {
    if (e === "") {
      return a;
    }

    if (e === array1[idx]) {
      return (a += 4);
    }

    return --a;
  };
  const score = array2.reduce(reducer, 0);
  return score < 0 ? 0 : score;
}

//

checkExam = (x, y) =>
  (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === "" ? 0 : -1), 0)) > 0
    ? x
    : 0;

    ///

const checkExam = (array1, array2) => {
  let result = array2.reduce((score, answer, i) => {
    if (answer == array1[i]) return (score += 4);
    else if (answer == 0) return (score += 0);
    else return score - 1;
  }, 0);
  return result < 0 ? 0 : result;
};



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]),
      6
    );
    assert.strictEqual(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]), 7);
    assert.strictEqual(
      checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]),
      16
    );
    assert.strictEqual(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]), 0);
  });
});
