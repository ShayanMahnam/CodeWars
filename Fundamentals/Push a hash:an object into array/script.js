//My Solution
items = [{ a: "b", c: "d" }];
//correct answers
var items = [];
items.push({ a: "b", c: "d" });
//
var items = [{ a: "b", c: "d" }];
//
//Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Push an object into array", function () {
  it("should has a value", function () {
    assert.isNotEmpty(items, "The array is still empty");
  });
  it("should has only one value", function () {
    assert.lengthOf(items, 1, "The array contains too many values");
  });
  it("should has the correct value", function () {
    assert.deepEqual(
      items,
      [{ a: "b", c: "d" }],
      'The array does not contain the correct value"'
    );
  });
});
