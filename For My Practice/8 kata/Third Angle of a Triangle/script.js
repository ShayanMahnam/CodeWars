// my solution


function otherAngle(a, b) {
  let c = 180 - (a + b);
  return c;
}

// other solutions

function otherAngle(a, b) {
  return 180 - (a + b);
}

//

const otherAngle = (a, b) => 180 - a - b;

//

function otherAngle(a, b) {
  if (a < 0 || b < 0)
    //ensure no negative angles
    return 0;
  if (a + b >= 180)
    //ensure 2 angles don't sum up to 180
    return 0;
  return 180 - a - b; //return missing angle
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(otherAngle(30, 60), 90);
    assert.strictEqual(otherAngle(60, 60), 60);
    assert.strictEqual(otherAngle(43, 78), 59);
    assert.strictEqual(otherAngle(10, 20), 150);
  });
});