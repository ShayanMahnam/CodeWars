// my solution

function narcissistic(value) {
  // Code me to return true or false
  return value
    .toString()
    .split("")
    .map((x) => x ** value.toString().length)
    .reduce((prev, cur) => prev + cur) === value
    ? true
    : false;
}



// other solutions
function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function (p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}

//

function narcissistic(value) {
  return (
    value
      .toString()
      .split("")
      .map((x, i, arr) => x ** arr.length)
      .reduce((a, b) => +a + +b) === value
  );
}




// test
const Test = require("@codewars/test-compat");

describe("Narcissistic Function", function () {
  it("should find small numbers are all narcissistic", function () {
    Test.assertEquals(narcissistic(7), true, "7 is narcissistic");
  });

  it("should find these numbers are narcissistic", function () {
    Test.assertEquals(narcissistic(371), true, "371 is narcissistic");
  });
});
