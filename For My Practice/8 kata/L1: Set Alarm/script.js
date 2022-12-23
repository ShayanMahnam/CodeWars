// my solution
function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}



// other solutions
const setAlarm = (employed, vacation) => employed && !vacation;

//

function setAlarm(employed, vacation) {
  return employed > vacation;
}

//

function setAlarm(employed, vacation) {
  if (employed == true && vacation == true) {
    return false;
  }
  if (employed == false && vacation == true) {
    return false;
  }
  if (employed == false && vacation == false) {
    return false;
  }
  if (employed == true && vacation == false) {
    return true;
  }
}

// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Test Suite", () => {
  it("Fixed tests", () => {
    assert.strictEqual(setAlarm(true, true), false, "Should be false.");
    assert.strictEqual(setAlarm(false, true), false, "Should be false.");
    assert.strictEqual(setAlarm(true, false), true, "Should be true.");
  });
});
