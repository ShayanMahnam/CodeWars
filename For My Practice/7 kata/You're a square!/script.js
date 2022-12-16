// my solution

var isSquare = function (n) {
  if (n >= 0 && Math.sqrt(n) % 1 === 0) {
    return true;
  }

  return false;
};


// other solutions


function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

//

const isSquare = (n) => Number.isInteger(Math.sqrt(n));

//

var isSquare = function (n) {
  for (var x = 0; x <= n; x++) {
    if (n === 0) {
      return true;
    } else if (n / x === x) {
      return true;
    }
  }

  return false;
};


// test

const Test = require("@codewars/test-compat");

describe("isSquare", function () {
  it("should work for some examples", function () {
    Test.assertEquals(
      isSquare(-1),
      false,
      "-1: Negative numbers cannot be square numbers"
    );
    Test.assertEquals(isSquare(0), true, "0 is a square number (0 * 0)");
    Test.assertEquals(isSquare(3), false, "3 is not a square number");
    Test.assertEquals(isSquare(4), true, "4 is a square number (2 * 2)");
    Test.assertEquals(isSquare(25), true, "25 is a square number (5 * 5)");
    Test.assertEquals(isSquare(26), false, "26 is not a square number");
  });
});