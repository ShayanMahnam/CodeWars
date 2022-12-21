// my solution

function countPositivesSumNegatives(input) {
  // your code here
  if (input === null || input.length < 1) {
    return [];
  }
  var array = [0, 0];

  for (var i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      array[1] += input[i];
    } else {
      array[0] += 1;
    }
  }
  return array;
}


// other solutions

function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : [];
}

//

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce(
    (arr, n) => {
      if (n > 0) arr[0]++;
      if (n < 0) arr[1] += n;
      return arr;
    },
    [0, 0]
  );
}

//

function countPositivesSumNegatives(input) {
  if (!input || input.length == 0) return [];
  var sum = 0,
    count = 0;
  input.forEach(function (el) {
    if (el > 0) count++;
    else sum += el;
  });
  return [count, sum];
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  });

  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];
    assert.deepEqual(actual, expected);
  });
});