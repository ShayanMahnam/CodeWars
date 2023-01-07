// my solution

function index(array, n) {
  //your code here
  return !array[n] ? -1 : array[n] ** n;
}


// other solutions

const index = (array, n) => (array.length > n ? Math.pow(array[n], n) : -1);

//

function index(array, n) {
  //your code here
  return array[n] ** n || -1;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(index([1, 2, 3, 4], 2), 9);
    assert.strictEqual(index([1, 3, 10, 100], 3), 1000000);
    assert.strictEqual(index([1, 2], 3), -1);
    assert.strictEqual(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9), 1);
    assert.strictEqual(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9), 512);
    assert.strictEqual(index([29, 82, 45, 10], 3), 1000);
    assert.strictEqual(index([6, 31], 3), -1);
    assert.strictEqual(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10), -1);
  });
});
