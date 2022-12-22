//My Solution
function stringToArray(s) {
  return s.split(" ");
}
//correct answers
function stringToArray(string) {
  return string.split(" ");
}
//
const stringToArray = (string) => string.split(" ");
//
stringToArray = (s) => s.split(" ");
//
function stringToArray(string) {
  var result = [];
  var traverse = function foo(string) {
    for (var i = 0; i < string.length; i++) {
      var chr = string.charAt(i);
      if (chr === " ") {
        result.push(string.slice(0, i));
        foo(string.slice(i + 1));
        return;
      }
    }
    result.push(string);
  };
  traverse(string);
  return result;
}
//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    assert.deepEqual(stringToArray("I love arrays they are my favorite"), [
      "I",
      "love",
      "arrays",
      "they",
      "are",
      "my",
      "favorite",
    ]);
  });
});

