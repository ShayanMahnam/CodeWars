// my solution

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}


// other solutions
function powersOfTwo(n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

//

function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}

//

function powersOfTwo(n) {
  return [...Array(n + 1)].map((_, i) => 2 ** i);
}

//





// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1]);
    assert.deepEqual(powersOfTwo(1), [1, 2]);
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16]);
  });
});