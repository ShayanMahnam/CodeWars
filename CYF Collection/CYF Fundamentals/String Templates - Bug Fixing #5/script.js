//My Solution
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}
//correct answers
const buildString = (...template) => `I like ${template.join(", ")}!`;
//
function buildString() {
  var args = Array.prototype.slice.call(arguments);
  return "I like " + args.join(", ") + "!";
}
//Sample Tests
const assert = require("chai").assert;

describe("Fixed Tests", function () {
  it("Fixed Tests", function () {
    assert.strictEqual(
      buildString("Cheese", "Milk", "Chocolate"),
      "I like Cheese, Milk, Chocolate!",
      "Return the correct String"
    );
    assert.strictEqual(
      buildString("Cheese", "Milk"),
      "I like Cheese, Milk!",
      "Return the correct String"
    );
    assert.strictEqual(
      buildString("Chocolate"),
      "I like Chocolate!",
      "Return the correct String"
    );
  });
});
