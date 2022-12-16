// my solution
function check(a, x) {
  // your code here
  return a.includes(x) ? true : false;
}



// other solutions


const check = (a, x) => a.includes(x);


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(check([66, 101], 66), true);
    assert.strictEqual(check([101, 45, 75, 105, 99, 107], 107), true);
    assert.strictEqual(check(["t", "e", "s", "t"], "e"), true);
    assert.strictEqual(check(["what", "a", "great", "kata"], "kat"), false);
  });
});