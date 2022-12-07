// my solution
function divisibleBy(numbers, divisor) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      arr.push(numbers[i]);
      
    }
  }
  return arr;
}

//Other solutions
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}
//
const divisibleBy = (numbers, divisor) =>
  numbers.filter((number) => !(number % divisor));


//Test
const Test = require("@codewars/test-compat");

describe("Sample tests", function () {
  it("should pass sample tests", function () {
    Test.assertDeepEquals(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
    Test.assertDeepEquals(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
    Test.assertDeepEquals(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
    Test.assertDeepEquals(divisibleBy([0], 4), [0]);
    Test.assertDeepEquals(divisibleBy([1, 3, 5], 2), []);
  });
});  