// my solution

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  return dna.replaceAll("T", "U");
}


// other solutions
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

//

function DNAtoRNA(dna) {
  return dna.split("T").join("U");
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU");
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU");
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
  });
});