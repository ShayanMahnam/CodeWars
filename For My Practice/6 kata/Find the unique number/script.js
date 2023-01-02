// my solution

function findUniq(arr) {
  // do magic
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}



// other solutions

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

//

function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}

//

function findUniq(arr) {
  return arr.filter(function (elem) {
    return arr.indexOf(elem) === arr.lastIndexOf(elem);
  })[0];
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});
