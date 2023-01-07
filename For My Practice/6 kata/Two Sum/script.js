// my solution
function twoSum(numbers, target) {
  // ...
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let res = numbers[i] + numbers[j];
      if (res == target) return [i, j];
    }
  }
}



// other solutions
function twoSum(numbers, target) {
  let seen = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i],
      y = target - x;
    if (seen.has(y)) return [seen.get(y), i];
    seen.set(x, i);
  }
}

//

function twoSum(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    second = numbers.indexOf(target - numbers[i], i + 1);
    if (second > i) {
      return [i, second];
    }
  }
}

//

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length; j++) {
      if (i !== j && numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  const testCases = [
    [[1, 2, 3], 4, [0, 2]],
    [[1234, 5678, 9012], 14690, [1, 2]],
    [[2, 2, 3], 4, [0, 1]],
    [[2, 3, 1], 4, [1, 2]],
  ];
  for (const [numbers, target, expected] of testCases)
    it(`Testing for numbers = [${numbers.join(
      ", "
    )}], target = ${target}`, () => check(numbers, target, expected));

  const numericalCompare = (a, b) => a - b;
  function check(arr, target, expected) {
    actual = twoSum(arr.slice(), target);
    assert.isArray(actual);
    assert.deepEqual(actual.sort(numericalCompare), expected);
  }
});