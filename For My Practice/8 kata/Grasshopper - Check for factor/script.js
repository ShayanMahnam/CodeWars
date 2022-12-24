// my solution

function checkForFactor(base, factor) {
  // code here
  return base % factor === 0;
}


// other solutions

const checkForFactor = (base, factor) => !(base % factor);

//

function checkForFactor(base, factor) {
  let check = base % factor;
  if (check == 0) {
    return true;
  }
  return false;
}


// test

const Test = require("@codewars/test-compat");

describe("check for factor", function () {
  it("should return true", function () {
    Test.assertEquals(checkForFactor(10, 2), true);
    Test.assertEquals(checkForFactor(63, 7), true);
    Test.assertEquals(checkForFactor(2450, 5), true);
    Test.assertEquals(checkForFactor(24612, 3), true);
  });
  it("should return false", function () {
    Test.assertEquals(checkForFactor(9, 2), false);
    Test.assertEquals(checkForFactor(653, 7), false);
    Test.assertEquals(checkForFactor(2453, 5), false);
    Test.assertEquals(checkForFactor(24617, 3), false);
  });
});