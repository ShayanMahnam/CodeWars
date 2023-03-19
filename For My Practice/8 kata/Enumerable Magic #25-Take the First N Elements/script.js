// my solution

function take(arr, n) {
  // Your code here
  return arr.slice(0, n);
}


// other solutions

let take = (arr, n) => arr.slice(0, n);
//

function take(arr, n) {
  return arr.length < n ? arr.slice() : arr.slice(0, n);
}

//




// test
const Test = require("@codewars/test-compat");

describe("Sample Tests", function () {
  it("should work for sample tests", function () {
    Test.assertDeepEquals(
      take([0, 1, 2, 3, 5, 8, 13], 3),
      [0, 1, 2],
      "should return the first 3 items"
    );
  });
});