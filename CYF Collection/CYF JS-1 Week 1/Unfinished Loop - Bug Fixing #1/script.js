//My Solution
function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
//correct answers
const createArray = (n) => Array(...Array(n)).map((v, i) => i + 1);
//
function createArray(number) {
  return Array.from({ length: number }, (v, i) => i + 1);
}
//
const createArray = (number) => [...Array(number)].map((_, idx) => ++idx);
//
function createArray(number) {
  let newArray = [];
  for (let i = 1; i <= number; i++) newArray.push(i);
  return newArray;
}
//Sample Tests
const Test = require("@codewars/test-compat");

describe("Fix Timmys Counter", function () {
  it("Fixed Tests", function () {
    Test.assertSimilar(createArray(1), [1]);
    Test.assertSimilar(createArray(2), [1, 2]);
    Test.assertSimilar(createArray(3), [1, 2, 3]);
    Test.assertSimilar(createArray(4), [1, 2, 3, 4]);
    Test.assertSimilar(createArray(5), [1, 2, 3, 4, 5]);
  });
});
