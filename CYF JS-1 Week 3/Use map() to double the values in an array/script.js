// my solution
function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
  return array.map((x) => x * 2);
}



//Other solutions
function double(array) {
  return array.map(function (c) {
    return c * 2;
  });
}
//
function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.

  var doubler = function (num) {
    return num * 2;
  };

  var final = array.map(doubler);
  return final;
}






//Test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var test1 = [1, 2, 3, 4, 5];
    var test2 = [71, -548, 12.3, 31415];

    Test.assertSimilar(double(test1), [2, 4, 6, 8, 10]);
    Test.assertSimilar(double(test2), [142, -1096, 24.6, 62830]);
  });
});