// my solution

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s * 27.7778);
}


// other solutions


const cockroachSpeed = (s) => Math.floor(s / 0.036);

//

function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;

  return Math.floor((s * centimetersInKilometers) / secsInHour);
}

//

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", function () {
  it("Testing for fixed tests", () => {
    assert.strictEqual(cockroachSpeed(1.08), 30);
    assert.strictEqual(cockroachSpeed(1.09), 30);
    assert.strictEqual(cockroachSpeed(0), 0);
  });
});
