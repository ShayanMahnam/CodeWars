// my solution


function inAscOrder(arr) {
  // Code your algorithm here :)
  let check = arr.slice(0);
  // Hmmm ... maybe we should try our luck out ...
  // if (Math.random() > 0.5) {
  //  return true;
  // } else {
  //  return false;
  // }
  return arr.join("") === check.sort((a, z) => a - z).join("");
}

// other solutions

function inAscOrder(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

//

function inAscOrder(arr) {
  return arr.every((_, i) => i == 0 || arr[i] > arr[i - 1]);
}

//

const inAscOrder = (arr) => arr.join("") === arr.sort((a, b) => a - b).join("");

//

function inAscOrder(arr) {
  return arr.slice(1).every((x, i) => x >= arr[i]);
}

//

var inAscOrder = (a) => a.every((n, i) => !i || n > a[i - 1]);


// test

const chai = require("chai");
const assert = chai.assert;

describe("Description Examples", () => {
  it("Should pass description examples", () => {
    assert.strictEqual(
      inAscOrder([1, 2, 4, 7, 19]),
      true,
      'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
    );
    assert.strictEqual(
      inAscOrder([1, 2, 3, 4, 5]),
      true,
      'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
    );
    assert.strictEqual(
      inAscOrder([1, 6, 10, 18, 2, 4, 20]),
      false,
      'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
    );
    assert.strictEqual(
      inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
      false,
      'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
    );
  });
});
