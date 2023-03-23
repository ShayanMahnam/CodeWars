// my solution

function dutyFree(normPrice, discount, hol) {
  return Math.floor((hol / (normPrice * discount)) * 100);
}


// other solutions
function dutyFree(normPrice, discount, hol) {
  var saving = (normPrice * discount) / 100;
  return Math.floor(hol / saving);
}

//

const dutyFree = (normPrice, discount, hol) =>
  (hol / ((normPrice * discount) / 100)) ^ 0;



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(dutyFree(12, 50, 1000), 166);
    assert.strictEqual(dutyFree(17, 10, 500), 294);
    assert.strictEqual(dutyFree(24, 35, 3000), 357);
  });
});