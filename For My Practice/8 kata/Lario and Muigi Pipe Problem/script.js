// my solution

function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}


// other solutions
let pipeFix = (nums) =>
  Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

///

function getMaxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

function getMinOfArray(numbers) {
  return Math.min.apply(null, numbers);
}

function pipeFix(numbers) {
  var newArray = [];
  var min = getMinOfArray(numbers);
  var max = getMaxOfArray(numbers);
  for (var i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}

//

function pipeFix(numbers) {
  return Array.from(
    { length: numbers[numbers.length - 1] - numbers[0] + 1 },
    (_, i) => numbers[0] + i
  );
}

//

const pipeFix = (n) => {
  let results = [],
    i = Math.min(...n);
  while (i <= Math.max(...n)) {
    results.push(i);
    i++;
  }
  return results;
};




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(
      pipeFix([1, 2, 3, 5, 6, 8, 9]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepEqual(
      pipeFix([1, 2, 3, 12]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    );
    assert.deepEqual(pipeFix([6, 9]), [6, 7, 8, 9]);
    assert.deepEqual(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
    assert.deepEqual(pipeFix([1, 2, 3]), [1, 2, 3]);
  });
});