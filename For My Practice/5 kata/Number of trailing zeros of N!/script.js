// my solution

function zeros(n) {
  let count = 0;

  // Count the number of factors of 5 in the prime factorization of n!
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }

  return count;
}


// other solutions
function zeros(n) {
  var zs = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    zs += n;
  }
  return zs;
}

//

function zeros(n) {
  return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
}

//

const zeros = (n) => (n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5));




// test

const Test = require("@codewars/test-compat");

describe("Sample Tests", function () {
  it("Should pass sample tests", function () {
    Test.assertEquals(zeros(0), 0, "Testing with n = 0");
    Test.assertEquals(zeros(5), 1, "Testing with n = 5");
    Test.assertEquals(zeros(6), 1, "Testing with n = 6");
    Test.assertEquals(zeros(30), 7, "Testing with n = 30");
  });
});