// my solution
function fixTheMeerkat(arr) {
  //your code here
  return arr.reverse();
}



// other solutions

const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];

//

function fixTheMeerkat(arr) {
  return [arr[2], arr[1], arr[0]];
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(fixTheMeerkat(["tail", "body", "head"]), [
      "head",
      "body",
      "tail",
    ]);
    assert.deepEqual(fixTheMeerkat(["tails", "body", "heads"]), [
      "heads",
      "body",
      "tails",
    ]);
    assert.deepEqual(fixTheMeerkat(["bottom", "middle", "top"]), [
      "top",
      "middle",
      "bottom",
    ]);
    assert.deepEqual(fixTheMeerkat(["lower legs", "torso", "upper legs"]), [
      "upper legs",
      "torso",
      "lower legs",
    ]);
    assert.deepEqual(fixTheMeerkat(["ground", "rainbow", "sky"]), [
      "sky",
      "rainbow",
      "ground",
    ]);
  });
});
