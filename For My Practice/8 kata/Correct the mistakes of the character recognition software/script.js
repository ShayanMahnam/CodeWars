// my solution


function correct(string) {
  // your code here
  return string.replaceAll("0", "O").replaceAll("1", "I").replaceAll("5", "S");
}

// other solutions

correct = (s) => s.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");

//

const corrections = {
  5: "S",
  0: "O",
  1: "I",
};

const correct = (string) =>
  string.replace(/[501]/g, (character) => corrections[character]);

//

function correct(s) {
  s = s.split("");
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "5") s[i] = "S";
    else if (s[i] === "0") s[i] = "O";
    else if (s[i] === "1") s[i] = "I";
  }
  return s.join("");
}

// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(correct("L0ND0N"), "LONDON");
    assert.strictEqual(correct("DUBL1N"), "DUBLIN");
    assert.strictEqual(correct("51NGAP0RE"), "SINGAPORE");
    assert.strictEqual(correct("BUDAPE5T"), "BUDAPEST");
    assert.strictEqual(correct("PAR15"), "PARIS");
  });
});
