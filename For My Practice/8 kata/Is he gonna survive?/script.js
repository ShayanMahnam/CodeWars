// my solution

function hero(bullets, dragons) {
  //Get Coding!
  return bullets >= dragons * 2;
}



// other solutions

const hero = (bullets, dragons) => dragons * 2 <= bullets;



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(hero(10, 5), true);
    assert.strictEqual(hero(7, 4), false);
    assert.strictEqual(hero(4, 5), false);
    assert.strictEqual(hero(100, 40), true);
    assert.strictEqual(hero(1500, 751), false);
    assert.strictEqual(hero(0, 1), false);
  });
});
