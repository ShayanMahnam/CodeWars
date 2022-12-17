// my solution

function areYouPlayingBanjo(name) {
  // Implement me
  return name.toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}


// other solutions
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

//

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
}

//

function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    assert.strictEqual(
      areYouPlayingBanjo("bravo"),
      "bravo does not play banjo"
    );
    assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
  });
});
