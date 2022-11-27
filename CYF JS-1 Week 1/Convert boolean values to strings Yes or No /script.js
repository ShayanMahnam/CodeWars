//My Solution
function boolToWord(bool) {
  //...

  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}
//correct answers
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}
//
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}
//
let boolToWord = (bool) => (bool ? "Yes" : "No");
//Sample Tests
const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for basic tests", () => {
    assert.strictEqual(boolToWord(true), "Yes");
    assert.strictEqual(boolToWord(false), "No");
  });
});
