//My Solution
function evenOrOdd(number) {
  return !(number % 2) ? "Even" : "Odd";
}
//correct answers
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
// 
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
//
const even_or_odd = (n) => (n % 2 ? "Odd" : "Even");
//Sample Tests
const chai = require("chai");
const assert = chai.assert;

describe("Sample tests", () => {
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});

