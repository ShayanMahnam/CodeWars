// my solution

function findDifference(a, b) {
  //loading...
  return a.reduce((prev, cur) => prev * cur) >
    b.reduce((prev, cur) => prev * cur)
    ? a.reduce((prev, cur) => prev * cur) - b.reduce((prev, cur) => prev * cur)
    : b.reduce((prev, cur) => prev * cur) - a.reduce((prev, cur) => prev * cur);
}


// other solutions
function find_difference(a, b) {
  return Math.abs(
    a.reduce((previous, current) => previous * current) -
      b.reduce((previous, current) => previous * current)
  );
}

//

function find_difference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

//

function find_difference([a, b, c], [d, e, f]) {
  return Math.abs(a * b * c - d * e * f);
}

//

function findDifference(a, b) {
  return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b));
}




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(findDifference([3, 2, 5], [1, 4, 4]), 14);
    assert.strictEqual(findDifference([9, 7, 2], [5, 2, 2]), 106);
    assert.strictEqual(findDifference([11, 2, 5], [1, 10, 8]), 30);
    assert.strictEqual(findDifference([4, 4, 7], [3, 9, 3]), 31);
    assert.strictEqual(findDifference([15, 20, 25], [10, 30, 25]), 0);
  });
});