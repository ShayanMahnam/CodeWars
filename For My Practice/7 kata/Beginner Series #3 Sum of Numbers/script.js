// my solution

function getSum(a, b) {
  let count = 0;
  if (a == b) return a;
  if (a < b) {
    for (; a <= b; a++) {
      count += a;
    }
  } else if (a > b) {
    for (; b <= a; b++) {
      count += b;
    }
  }
  return count;
}


// other solutions
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

//

function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

//

function GetSum(a, b) {
  tmp = 0;

  if (a < b) while (a <= b) tmp += a++;
  else while (a >= b) tmp += a--;

  return tmp;
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getSum(0, -1), -1);
    assert.strictEqual(getSum(0, 1), 1);
  });
});