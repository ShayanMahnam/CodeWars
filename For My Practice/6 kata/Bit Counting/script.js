// my solution

var countBits = function (n) {
  // Program Me
  return n
    .toString(2) // convert to binary string
    .split("") // split into array of characters
    .reduce((acc, c) => acc + (c === "1" ? 1 : 0), 0); // count the number of "1" characters
};


// other solutions

countBits = (n) => n.toString(2).split("0").join("").length;

//

var countBits = function (n) {
  return n.toString(2).replace(/0/g, "").length;
};

//

function countBits(n) {
  for (c = 0; n; n >>= 1) c += n & 1;
  return c;
}

//

const countBits = (n) =>
  n
    .toString(2)
    .split("")
    .filter((ele) => ele == 1).length;



// test
const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countBits(0), 0);
    assert.strictEqual(countBits(4), 1);
    assert.strictEqual(countBits(7), 3);
    assert.strictEqual(countBits(9), 2);
    assert.strictEqual(countBits(10), 2);
  });
});