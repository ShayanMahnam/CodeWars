// my solution

// function multiplyAll(arr) {
//   return function (num) {
//     return arr.map(function (x) {
//       return x * num;
//     });
//   };
// }

const multiplyAll = arr => num => arr.map(x => x * num);


// other solutions





// test

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("example tests", function () {
  it("return value must be an array", function () {
    const actual = multiplyAll([])(0);
    assert(
      Array.isArray(actual),
      `but it returned ${JSON.stringify(actual)}, of type ${typeof actual}`
    );
  });
  it("return value must have correct length", function () {
    assert.strictEqual(multiplyAll([1, 2])(1).length, 2, `but it did not`);
  });
  it("function must not mutate the original array", function () {
    const array = [1, 2, 3];
    multiplyAll(array)(0);
    assert.deepEqual(array, [1, 2, 3], `but it did`);
  });
  it("returned array must have correct values", function () {
    assert.deepEqual(
      multiplyAll([1, 2, 3])(2),
      [2, 4, 6],
      `multiplyAll ([ 1, 2, 3 ]) (2) `
    );
    assert.deepEqual(
      multiplyAll([1, 2, 3])(1),
      [1, 2, 3],
      `multiplyAll ([ 1, 2, 3 ]) (1) `
    );
    assert.deepEqual(
      multiplyAll([1, 2, 3])(0),
      [0, 0, 0],
      `multiplyAll ([ 1, 2, 3 ]) (0) `
    );
    assert.deepEqual(multiplyAll([])(10), [], `multiplyAll ([]) (10) `);
  });
});