//My Solution
function makeNegative(num) {
  // Code?
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}
//Other answers
function makeNegative(num) {
  return -Math.abs(num);
}
//
function makeNegative(num) {
  return num < 0 ? num : -num;
}
//
makeNegative = (n) => -Math.abs(n);
//Sample Tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(makeNegative(42), -42);
  });
});
