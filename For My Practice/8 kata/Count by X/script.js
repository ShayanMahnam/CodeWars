// my solution

function countBy(x, n) {
  let z = [];
  let i = 1;
  while (z.length < n) {
    z.push(x * i);
    i++;
  }
  return z;
}


// other solutions

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//

const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.deepEqual(
      countBy(1, 10),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "Array does not match"
    );
    assert.deepEqual(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");
  });
});
