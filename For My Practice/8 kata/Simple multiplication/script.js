// my solution

function simpleMultiplication(number) {
  // your code........

  return number % 2 === 0 ? number * 8 : number * 9;
}



// other solutions

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

//

function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8;
  } else {
    return value * 9;
  }
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      simpleMultiplication(2),
      16,
      "Should return double given argument.."
    );
    assert.strictEqual(
      simpleMultiplication(1),
      9,
      "Should return double given argument.."
    );
    assert.strictEqual(
      simpleMultiplication(8),
      64,
      "Should return given argument times eight..."
    );
    assert.strictEqual(
      simpleMultiplication(4),
      32,
      "Should return given argument times eight..."
    );
    assert.strictEqual(
      simpleMultiplication(5),
      45,
      "Should return given argument times nine..."
    );
  });
});