// my solution

const flip = (d, a) => {
  //TODO
  return d === "L" ? a.sort((a, z) => z - a) : a.sort((a, z) => a - z);
};


// other solutions

const flip2 = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));

//

const flip3 = (d, a) => {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);
};

//

const fli4 = (d, a) => {
  for (let i = 0; i < a.length; i++) {
    let t = false;
    for (let j = 0; j < a.length - 1; j++) {
      let num = a[j] - a[j + 1];
      if (num > 0) {
        let chache = a[j + 1];
        a[j + 1] = num + a[j + 1];
        a[j] = a[j] - num;
        t = true;
      }
    }
    if (!t) break;
  }
  return d == "R" ? a : a.reverse();
};

// test

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("fixed tests", function() {
    assert.deepEqual(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
    assert.deepEqual(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
  });
});
