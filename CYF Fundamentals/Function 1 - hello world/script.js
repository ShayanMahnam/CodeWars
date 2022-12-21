//My Solution
// Write a function "greet" that returns "hello world!"
function greet() {
  const myText = "hello world!";
  return myText;
}

greet();


//correct answers
function greet() {
  return "hello world!";
}
//
const greet = () => "hello world!";





//Sample Tests
const assert = require("chai").assert;

describe("Testing function", function () {
  it("Is it a function?", function () {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function () {
    assert.strictEqual(greet(), "hello world!");
  });
});