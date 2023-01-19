// my solution

function mergeArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .sort((a, z) => a - z)
    .filter((element, index, arr) => arr.indexOf(element) === index);
}


// other solutions

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

//

function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}

//

function mergeArrays(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2)
    .sort((a, b) => a - b);
}



// test
const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(
      mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]),
      [1, 2, 3, 4, 5, 6, 7, 8],
      "Basic tests"
    );
    assert.deepEqual(
      mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "Basic tests"
    );
    assert.deepEqual(
      mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]),
      [1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
      "Basic tests"
    );
  });
});
