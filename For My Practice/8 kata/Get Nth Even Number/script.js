// my solution

function nthEven(n) {
  // your code here
  return (n - 1) * 2;
}


// other solutions

const nthEven = (n) => n * 2 - 2;

//

function nthEven(n) {
  return n * 2 - 2;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    // Basic Tests

    Test.assertEquals(nthEven(1), 0, "Wrong Value!");
    Test.assertEquals(nthEven(2), 2, "Wrong Value!");
    Test.assertEquals(nthEven(3), 4, "Wrong Value!");

    Test.assertEquals(nthEven(100), 198, "Wrong Value!");
    Test.assertEquals(nthEven(1298734), 2597466, "Wrong Value!");
  });
});
