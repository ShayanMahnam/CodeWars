// my solution

function addFive(num) {
  var total = num + 5;
  return total;
}


// other solutions

function addFive(num) {
  return num + 5;
}



// test

const Test = require("@codewars/test-compat");

describe("fix add five", () => {
  it("fixed tests", () => {
    Test.assertEquals(addFive(5), 10);
    Test.assertEquals(addFive(0), 5);
    Test.assertEquals(addFive(-5), 0);
  });
});