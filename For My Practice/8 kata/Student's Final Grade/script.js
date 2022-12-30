// my solution

function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
}


// other solutions

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if ((exam > 75) & (projects >= 5)) return 90;
  if ((exam > 50) & (projects >= 2)) return 75;
  return 0;
}

//

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  else if (exam > 75 && projects >= 5) return 90;
  else if (exam > 50 && projects >= 2) return 75;
  else return 0;
}

//

const finalGrade = (grade, projects) =>
  grade > 90 || projects > 10
    ? 100
    : grade > 75 && projects > 4
    ? 90
    : grade > 50 && projects > 1
    ? 75
    : 0;




// test

const chai = require("chai");
const assert = chaai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(finalGrade(100, 12), 100);
    assert.strictEqual(finalGrade(85, 5), 90);
  });
});