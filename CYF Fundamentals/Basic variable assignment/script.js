//My Solution
var a = "code";
var b = "wa.rs";
var name = a + b;

//correct answers
var a = "code",
  b = "wa.rs",
  name = a + b;
  //
  let name = "codewa.rs";
  //
  const name = "codewa.rs";
//Sample Tests
const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(name, "codewa.rs");
  });
});
