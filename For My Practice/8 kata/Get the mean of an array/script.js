// my solution

function getAverage(marks) {
  //TODO : calculate the downward rounded average of the marks array
  return Math.floor(marks.reduce((prev, cur) => prev + cur) / marks.length);
}


// other solutions

function getAverage(marks) {
  // calculates total number of marks
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
  return Math.floor(total / marks.length);
}

//

const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);
  
//

function getAverage(marks) {
  var sum = 0;

  for (var i in marks) sum += marks[i];

  return parseInt(sum / marks.length);
}


// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(getAverage([2, 2, 2, 2]), 2);
    Test.assertEquals(getAverage([1, 2, 3, 4, 5]), 3);
    Test.assertEquals(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
  });
});
