// my solution

Array.range = function (start, count) {
  return Array.from({ length: count }, (_, i) => start + i);
};

Array.prototype.sum = function () {
  return this.reduce((acc, val) => acc + val, 0);
};


// other solutions
Array.range = function (start, count) {
  return Array.apply(null, Array(count)).map(function (e, i) {
    return start + i;
  });
};

Array.prototype.sum = function () {
  return this.reduce(function (prev, next) {
    return prev + next;
  }, 0);
};
///

Array.range = function (start, count) {
  var arr = [];
  while (count > 0) {
    arr.push(start++);
    count--;
  }
  return arr;
};

Array.prototype.sum = function () {
  return this.reduce(function (a, b) {
    return a + b;
  }, 0);
};

///

Array.range = function (start, count) {
  return [...Array(count)].map((_, idx) => idx + start);
};

Array.prototype.sum = function () {
  return this.reduce((pre, val) => pre + val, 0);
};




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed Tests", () => {
  describe("Array.prototype.range", () => {
    it("Array's first value should begin with start", () => {
      assert.deepEqual(Array.range(1, 3), [1, 2, 3]);
    });
    it("Should work for negative starts", () => {
      assert.deepEqual(Array.range(-1, 1), [-1]);
      assert.deepEqual(Array.range(-3, 5), [-3, -2, -1, 0, 1]);
    });
    it("Should return empty array for zero counts", () => {
      assert.deepEqual(Array.range(0, 0), []);
      assert.deepEqual(Array.range(1, 0), []);
    });
  });
  describe("Array.prototype.sum", () => {
    it("Empty array should sum to 0", () => {
      assert.strictEqual([].sum(), 0);
    });
    it("Should be able to add negative numbers", () => {
      assert.strictEqual([-2, -1, -5].sum(), -8);
    });
    it("Should be able to add all numbers in the array", () => {
      assert.strictEqual([-3, -2, -1, 0, 1, 2, 3].sum(), 0);
    });
  });
});