// my solution

function takeWhile(arr, pred) {
  // Your code here
  return arr.map((v) => pred(v)).indexOf(false) === -1
    ? arr
    : arr.slice(0, arr.map((v) => pred(v)).indexOf(false));
}


// other solutions
function takeWhile(arr, pred) {
  for (i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) return arr.slice(0, i);
  }
  return arr;
}

//

function takeWhile(arr, pred) {
  for (var res = [], i = 0; i < arr.length; i++) {
    if (!pred(arr[i])) break;
    res.push(arr[i]);
  }

  return res;
}

//

function takeWhile(arr, pred) {
  return arr.length !== 0 && pred(arr[0])
    ? [arr[0]].concat(takeWhile(arr.slice(1), pred))
    : [];
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("the takeWhile function", function () {
  function isEven(num) {
    return num % 2 === 0;
  }

  function isOdd(num) {
    return num % 2 !== 0;
  }

  const isEvenTests = [
    [
      [2, 6, 4, 10, 1, 5, 4, 3],
      [2, 6, 4, 10],
    ],
    [
      [2, 100, 1000, 10000, 5, 3, 4, 6],
      [2, 100, 1000, 10000],
    ],
    [
      [998, 996, 12, -1000, 200, 0, 1, 1, 1],
      [998, 996, 12, -1000, 200, 0],
    ],
    [[1, 4, 2, 3, 5, 4, 5, 6, 7], []],
    [
      [2, 4, 10, 100, 64, 78, 92],
      [2, 4, 10, 100, 64, 78, 92],
    ],
  ];

  const isOddTests = [
    [
      [1, 5, 111, 1111, 2, 4, 6, 4, 5],
      [1, 5, 111, 1111],
    ],
    [
      [-1, -5, 127, 86, 902, 2, 1],
      [-1, -5, 127],
    ],
    [[2, 1, 2, 4, 3, 5, 4, 6, 7, 8, 9, 0], []],
    [
      [1, 3, 5, 7, 9, 111],
      [1, 3, 5, 7, 9, 111],
    ],
  ];

  it("should be defined", function () {
    assert.deepEqual(takeWhile([], isEven), []);
  });

  it("should work when testing for even numbers", function () {
    isEvenTests.forEach(function (val, ind, arr) {
      assert.deepEqual(takeWhile(val[0], isEven), val[1]);
    });
  });

  it("should work when testing for odd numbers", function () {
    isOddTests.forEach(function (val, ind, arr) {
      assert.deepEqual(takeWhile(val[0], isOdd), val[1]);
    });
  });
});
