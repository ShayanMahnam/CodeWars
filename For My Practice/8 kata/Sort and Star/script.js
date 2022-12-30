// my solution

function twoSort(s) {
  let sortArr = s.sort()[0];
  return sortArr
    .split(" ")
    .map((x) => x.split("").join("***"))
    .join("");
}


// other solutions
function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

//

twoSort = (s) => s.sort()[0].split("").join("***");

//

function twoSort(s) {
  s.sort();
  return s[0].split("").join("***");
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      twoSort([
        "bitcoin",
        "take",
        "over",
        "the",
        "world",
        "maybe",
        "who",
        "knows",
        "perhaps",
      ]),
      "b***i***t***c***o***i***n"
    );
    assert.strictEqual(
      twoSort([
        "turns",
        "out",
        "random",
        "test",
        "cases",
        "are",
        "easier",
        "than",
        "writing",
        "out",
        "basic",
        "ones",
      ]),
      "a***r***e"
    );
  });
});