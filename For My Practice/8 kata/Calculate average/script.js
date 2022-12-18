// my solution

function findAverage(array) {
  // your code here

  return array.length > 0
    ? array.reduce((acc, cur) => acc + cur, 0) / array.length
    : 0;
}


// other solutions


function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  var result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(findAverage([1, 1, 1]), 1);
    assert.strictEqual(findAverage([1, 2, 3]), 2);
    assert.strictEqual(findAverage([1, 2, 3, 4]), 2.5);
  });
});  
