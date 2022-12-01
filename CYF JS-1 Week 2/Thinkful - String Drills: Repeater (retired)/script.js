//My Solution
const repeater = (string, n) => {
  return string.repeat(n);
};
//Other answers
const reepeater = (string, n) => {
  return string.repeat(n);
};
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(repeater("a", 5), "aaaaa");
    assert.strictEqual(repeater("Na", 16), "NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
    assert.strictEqual(repeater("Wub ", 6), "Wub Wub Wub Wub Wub Wub ");
  });
});