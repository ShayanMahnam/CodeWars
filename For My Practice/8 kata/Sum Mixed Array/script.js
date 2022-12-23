// my solution

function sumMix(x) {
  return x.map((x) => +x).reduce((prev, cur) => prev + cur, 0);
}


// other solutions

function sumMix(x) {
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

//

 function sumMix(x) {
   var somme = 0;
   for (i = 0; i < x.length; i++) {
     somme += Number(x[i]);
   }
   return somme;
 }



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, "7", "3"]), 22);
    assert.strictEqual(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
    assert.strictEqual(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
  });
});