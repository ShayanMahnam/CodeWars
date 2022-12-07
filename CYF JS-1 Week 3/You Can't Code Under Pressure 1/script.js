// my solution

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}


//Other solutions
const doubleInteger = (i) => 2 * i;
//

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i + i;
}



//Test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(doubleInteger(2), 4);
  });
});