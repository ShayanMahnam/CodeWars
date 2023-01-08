// my solution
function square(num) {
  return num ** 2;
}



// other solutions

const square = (n) => n * n;



// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(square(3), 9);
  });
});
