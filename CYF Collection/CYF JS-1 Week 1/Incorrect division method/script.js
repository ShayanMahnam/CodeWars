//My Solution
const solve = (x, y) => x / y;
//correct answers
const soolve = (x, y) => x/y // y
//
const sooolve = (x, y) => {
  let s = x / y;
  if (y == 0) {
    return Infinity;
  }
  return s;
};
//Sample Tests
const { assert } = require("chai");

it("example tests", function () {
  assert.strictEqual(solve(2, 1), 2);
  assert.strictEqual(solve(2, 4), 0.5);
  assert.strictEqual(solve(42, 0), Infinity);
  assert.strictEqual(solve(0, 8), 0);
  assert.strictEqual(solve(7, 2), 3.5);
  assert.strictEqual(solve(4.2, 1), 4.2);
  assert.strictEqual(solve(9999, 11), 909);
});
