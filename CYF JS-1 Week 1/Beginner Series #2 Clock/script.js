//My Solution
function past(h, m, s) {
  return h * 3600000 + m * 60000 + s * 1000;
}
//correct answers
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
//
const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);
//
function past(h, m, s) {
  var miliseconds = 0;
  miliseconds = miliseconds + s * 1000;
  miliseconds = miliseconds + m * 60000;
  miliseconds = miliseconds + h * 3600000;
  return miliseconds;
}
//Sample Tests

const { assert } = require("chai");

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(past(0, 1, 1), 61000);
    assert.strictEqual(past(1, 1, 1), 3661000);
    assert.strictEqual(past(0, 0, 0), 0);
    assert.strictEqual(past(1, 0, 1), 3601000);
    assert.strictEqual(past(1, 0, 0), 3600000);
  });
});