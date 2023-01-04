// my solution
"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return [].concat(...array).sort((a, z) => a - z);
}



// other solutions

"use strict";

const flattenAndSort = (array) => array.flat().sort((a, b) => a - b);

//

function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current], [])
    .sort((a, b) => a - b);
}

//

"use strict";

function flattenAndSort(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      newArray.push(array[i][j]);
    }
  }

  return newArray.sort((a, b) => a - b);
}

//





// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example test cases", function () {
  it("Should pass example tests", function () {
    assert.deepEqual(flattenAndSort([]), []);
    assert.deepEqual(flattenAndSort([[], []]), []);
    assert.deepEqual(flattenAndSort([[], [1]]), [1]);
    assert.deepEqual(
      flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
      ]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    );
    assert.deepEqual(
      flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]),
      [1, 2, 3, 4, 5, 6, 100]
    );
  });
});