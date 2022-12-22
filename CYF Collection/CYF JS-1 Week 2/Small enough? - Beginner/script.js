//My Solution
function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false;
    }
  }
  return true;
}
//Other answers
function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}
//
smallEnough = (a, l) => a.every((e) => e <= l);
//
function smallEnough(a, limit) {
  return a.every((x) => x <= limit);
}
//
function smallEnough(a, limit) {
  for (var i of a) {
    if (i > limit) return false;
  }
  return true;
}
//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(smallEnough([66, 101], 200), true);
    assert.strictEqual(
      smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100),
      false
    );
    assert.strictEqual(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(
      smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120),
      true
    );
  });
});
