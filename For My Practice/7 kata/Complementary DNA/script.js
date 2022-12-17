// my solution

function DNAStrand(dna) {
  let sequence = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  return dna.replace(/A|T|G|C/g, function (matched) {
    return sequence[matched];
  });
}


// other solutions
var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}
//

function DNAStrand(dna) {
  //your code here
  var result = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      result += "T";
    } else if (dna[i] === "T") {
      result += "A";
    } else if (dna[i] === "C") {
      result += "G";
    } else if (dna[i] === "G") {
      result += "C";
    } else {
      result += dna[i];
    }
  }
  return result;
}

//





// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"), "TTTT", "String AAAA is");
    assert.strictEqual(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
    assert.strictEqual(DNAStrand("GTAT"), "CATA", "String GTAT is");
  });
});