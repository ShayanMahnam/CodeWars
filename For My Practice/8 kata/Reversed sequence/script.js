// my solution

const reverseSeq = (n) => {
  let newArr = [];
  for (let i = n; i > 0; i--) {
    newArr.push(i);
  }
  return newArr;
};


// other solutions
const reverseSeq2 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};


//

const reverseSeq3 = (num) => {
  return new Array(num)
    .fill()
    .map((d, i) => i + 1)
    .reverse();
};



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("reverseSeq", function () {
  it("Sample Test", function () {
    assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
  });
});