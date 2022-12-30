// my solution

function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0;
}


// other solutions

function testEven(n) {
  return n % 2 === 0 ? true : false;
}

//

function testEven(n) {
  return !(n % 2);
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("visible_tests", () => {
    assert.strictEqual(testEven(0), true, "testEven for 0");
    assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
    assert.strictEqual(testEven(1), false, "testEven for 1");
    assert.strictEqual(testEven(2), true, "testEven for 2");
    assert.strictEqual(testEven(-4), true, "testEven for 2");
  });
});
