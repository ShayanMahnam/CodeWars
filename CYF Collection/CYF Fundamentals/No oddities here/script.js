// my solution

function noOdds(values) {
  // Return all non-odd values
  return values.filter((x) => x % 2 === 0);
}


// other solutions

function noOdds(values) {
  function isEven(number) {
    return number % 2 == 0;
  }

  return values.filter(isEven);
}

//

var noOdds = (values) => values.filter((x) => x % 2 === 0);

// test

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(noOdds([0, 1]), [0]);
    assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);
  });
});