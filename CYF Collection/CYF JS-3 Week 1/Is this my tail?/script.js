// my solution


function correctTail(body, tail) {
  let sub = body.substr(body.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// other solutions

function correctTail(bod, tail) {
  return bod[bod.length - 1] === tail;
}
  
//

const correctTail = (x, y) => x.endsWith(y);



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(correctTail("Fox", "x"), true);
    assert.strictEqual(correctTail("Rhino", "o"), true);
    assert.strictEqual(correctTail("Meerkat", "t"), true);
  });
});