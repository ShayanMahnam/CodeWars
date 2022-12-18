//My Solution
var summation = function (num) {
  return (num * (num + 1)) / 2;
};
//Other answers
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};
//
const summation = (n) => (n * (n + 1)) / 2;
//
var summation = function f(num) {
  return num ? num + f(num - 1) : 0;
};
//Sample Tests

const assert = require('chai').assert;

describe('summation', function () {
  it('should return the correct total', function () {
    assert.strictEqual(summation(1),  1);
    assert.strictEqual(summation(2),  3);
    assert.strictEqual(summation(8), 36);
  })
})