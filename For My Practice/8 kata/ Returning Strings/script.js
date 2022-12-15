// my solution

function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}


// other solutions

const greet = (name) => `Hello, ${name} how are you doing today?`;



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(
      greet("Shingles"),
      "Hello, Shingles how are you doing today?"
    );
  });
});
