// my solution
function multipleOfIndex(array) {
  // good luck
  return array.filter((el, i) => el % i === 0);
}



// other solutions

function multipleOfIndex(arr) {
  let arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % i == 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

//





// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Test", () => {
    assert.deepEqual(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
    assert.deepEqual(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
    assert.deepEqual(multipleOfIndex([11, -11]), [-11]);
    assert.deepEqual(
      multipleOfIndex([
        -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27,
        -92, 68,
      ]),
      [-85, 72, 0, 68]
    );
    assert.deepEqual(
      multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]),
      [38, -44, -99]
    );
    assert.deepEqual(
      multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]),
      [-49, 8, -60, 35]
    );
  });
});