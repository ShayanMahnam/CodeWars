// my solution

function rowSumOddNumbers(n) {
  // TODO
  return Math.pow(n, 3);
}


// other solutions
function rowSumOddNumbers(n) {
  /* The rows' start numbers are Hogben's centered polygonal numbers:
     1, 3, 7, 13, 21, 31, 43 = b[n] = n^2 - n + 1.
     <https://oeis.org/A002061>
     
     The sum of one row is given by:
     s[n] = n^2 + n(b[n] - 1).
     <https://www.quora.com/What-is-the-sum-of-n-consecutive-odd-integers/answer/Xavier-Dectot>
     
     Inline b[n]:
     s[n] = n^2 + n(n^2 - n + 1 - 1)
          = n^2 + n(n^2 - n)
          = n^2 + n^3 - n^2
          = n^3
     ... oh. */
  return n * n * n;
}

//
function rowSumOddNumbers(n) {
  return n * n * n;
}

//

let rowSumOddNumbers = (n) => n ** 3;

//

function rowSumOddNumbers(n) {
  var start = n * n - n + 1;
  var result = 0;

  for (i = 0; i < n; i++) {
    result = result + (start + i * 2);
  }

  return result;
}

//

function rowSumOddNumbers(n) {
  return n ** 3;
}

//

function rowSumOddNumbers(n) {
  // TODO
  return n > 0 ? n * n * n : "Wrong Input";
}

//

function rowSumOddNumbers(n) {
  const out = Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1);
  return out.slice(out.length - n).reduce((a, b) => a + b, 0);
}







// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(rowSumOddNumbers(1), 1);
    assert.strictEqual(rowSumOddNumbers(42), 74088);
  });
});
