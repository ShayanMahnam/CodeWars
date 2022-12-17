// my solution

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}


// other solutions

const makeUpperCase = (str) => str.toUpperCase();

//

function makeUpperCase(str) {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt(0);
    const chr =
      charCode >= 97 && charCode <= 122
        ? String.fromCharCode(charCode - 32)
        : str[i];

    output += chr;
  }

  return output;
}



// test

const { assert } = require("chai");

describe("Basic Tests", function () {
  it("should pass the basic tests", function () {
    assert.strictEqual(makeUpperCase(""), "");
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
  });
});