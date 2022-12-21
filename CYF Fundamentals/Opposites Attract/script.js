//My Solution
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
//correct answers
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
//
function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true;
  } else if (flower1 % 2 !== 0 && flower2 % 2 == 0) {
    return true;
  } else return false;
}
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1, 4), true);
    assert.strictEqual(lovefunc(2, 2), false);
    assert.strictEqual(lovefunc(0, 1), true);
    assert.strictEqual(lovefunc(0, 0), false);
  });
});