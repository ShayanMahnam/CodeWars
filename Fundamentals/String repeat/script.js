//My Solution
function repeatStr(n, s) {
  return s.repeat(n);
}
//correct answers
repeatStr = (n, s) => s.repeat(n);
//
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}
//
function repeatStr(n, str) {
  return str.repeat(n);
}
//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", function () {
  it("Basic tests", function () {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});
