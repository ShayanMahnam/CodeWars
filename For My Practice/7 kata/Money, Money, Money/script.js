// my solution

function calculateYears(principal, interest, tax, desired) {
  // your code
  var years = 0;
  while (principal < desired) {
    var interestEarned = principal * interest;
    var taxOnInterest = interestEarned * tax;
    principal += interestEarned - taxOnInterest;
    years++;
  }
  return years;
}


// other solutions


function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) / Math.log(1 + interest * (1 - tax))
  );
}

//

const calculateYears = (P, I, T, D) => {
  let year = 0;
  while (P < D && ++year) P += P * I - P * I * T;
  return year;
};


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("calculateYears", () => {
  it("Basic tests", () => {
    assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1100), 3);
    assert.strictEqual(calculateYears(1000, 0.01625, 0.18, 1200), 14);
    assert.strictEqual(calculateYears(1000, 0.05, 0.18, 1000), 0);
  });
});
