// my solution

function minMax(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return [min, max]; // fix me!
}


// other solutions

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//

function minMax(arr) {
  return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
}

//

	function minMax(arr) {
    var a = arr.sort(function (a, b) {
      return a - b;
    });
    return [a[0], a[a.length - 1]];
  }



// test

const assert = require("chai").assert;

describe("minMax", () => {
  const testCases = [
    [
      [1, 2, 3, 4, 5],
      [1, 5],
    ],
    [
      [2334454, 5],
      [5, 2334454],
    ],
    [[5], [5, 5]],
  ];
  for (const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepEqual(minMax(input), expected);
    });
  }
});