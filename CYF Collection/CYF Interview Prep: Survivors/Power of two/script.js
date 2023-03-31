// my solution

function isPowerOfTwo(n) {
  //.. should return true or false ..
  if (n <= 0) {
    return false;
  }
  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
}


// other solutions

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n));
}

//

function isPowerOfTwo(n) {
  return n === 0 ? false : (n & (n - 1)) == 0;
}

//

function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1) return false;

  return isPowerOfTwo(n / 2);
}

// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(isPowerOfTwo(2), true);
    Test.assertEquals(isPowerOfTwo(4096), true);
    Test.assertEquals(isPowerOfTwo(5), false);
  });
});
