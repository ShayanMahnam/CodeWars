// my solution

function fakeBin(x) {
  return x
    .split("")
    .map((x) => (x < 5 ? 0 : 1))
    .join("");
}


// other solutions

function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}

//

function fakeBin(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}

//




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(fakeBin("45385593107843568"), "01011110001100111");
    assert.strictEqual(fakeBin("509321967506747"), "101000111101101");
    assert.strictEqual(
      fakeBin("366058562030849490134388085"),
      "011011110000101010000011011"
    );
  });
});