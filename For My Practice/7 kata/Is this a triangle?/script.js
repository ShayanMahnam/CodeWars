// my solution

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}


// other solutions
var isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

//

function isTriangle(a, b, c) {
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  return a + b > c;
}

//

function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    if (a < b + c && b < a + c && c < a + b) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}




// test

const { assert } = require("chai");

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});