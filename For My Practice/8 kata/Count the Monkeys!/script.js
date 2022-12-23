// my solution

function monkeyCount(n) {
  // your code here
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}


// other solutions

function monkeyCount(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

//

function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));

  return arr;
}

//

function monkeyCount(n) {
  return [...Array(n).keys()].map((a) => a + 1);
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("monkeyCount", () => {
  it("should work for fixed tests", () => {
    assert.deepEqual(monkeyCount(5), [1, 2, 3, 4, 5]);
    assert.deepEqual(monkeyCount(3), [1, 2, 3]);
    assert.deepEqual(monkeyCount(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(monkeyCount(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(
      monkeyCount(20),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    );
  });
});