// my solution

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}


// other solutions

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; ++i) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

//

function firstNonConsecutive(arr) {
  let result = arr.find((val, index) => val !== index + arr[0]);

  return Number.isInteger(result) ? result : null;
}

//

firstNonConsecutive = (arr) =>
  arr.length == 1
    ? null
    : arr[0] + 1 != arr[1]
    ? arr[1]
    : firstNonConsecutive(arr.slice(1)); 

    //

    



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("a simple example", function () {
    const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
    assert.strictEqual(first, 6);
  });

  it("all sequential", function () {
    const first = firstNonConsecutive([1, 2, 3, 4]);
    assert.strictEqual(first, null);
  });
});