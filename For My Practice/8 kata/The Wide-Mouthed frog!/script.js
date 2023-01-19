// my solution

function mouthSize(animal) {
  // code here
  if (animal.toLowerCase() === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}


// other solutions

function mouthSize(animal) {
  return animal.toLowerCase() == "alligator" ? "small" : "wide";
}



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("The Wide-Mouthed frog! ", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(mouthSize("toucan"), "wide");
    assert.strictEqual(mouthSize("ant bear"), "wide");
    assert.strictEqual(mouthSize("alligator"), "small");
  });
});