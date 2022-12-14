// my solution

function squareSum(numbers) {
  return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
}


// other solutions
function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

//

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num * num, 0);
}

//

function squareSum(numbers) {
  var sum = 0;
  numbers.forEach(function (n) {
    sum += n * n;
  });
  return sum;
}

//

function squareSum(numbers) {
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}

//

const squareSum = (numbers) => numbers.reduce((a, b) => a + b ** 2, 0);




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(squareSum([1, 2]), 5);
    assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
    assert.strictEqual(squareSum([]), 0);
  });
});