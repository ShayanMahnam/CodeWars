// my solution

function enough(cap, on, wait) {
  // your code here
  return on + wait > cap ? on + wait - cap : 0;
}


// other solutions


function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

//

function enough(cap, on, wait) {
  if (on + wait < cap) {
    return 0;
  } else {
    return on + wait - cap;
  }
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(enough(10, 5, 5), 0);
    assert.strictEqual(enough(100, 60, 50), 10);
    assert.strictEqual(enough(20, 5, 5), 0);
  });
});
