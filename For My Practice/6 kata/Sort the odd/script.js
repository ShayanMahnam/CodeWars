// my solution

function sortArray(array) {
  // Return a sorted array.
  const oddArr = array.filter((x) => x % 2).sort((a, z) => a - z);
  return array.map((x) => (x % 2 ? oddArr.shift() : x));
}


// other solutions

function sortArray(array) {
  var odd = array.filter((elem) => elem % 2 !== 0).sort((a, b) => a - b);
  return array.map((elem) => (elem % 2 === 0 ? elem : odd.shift()));
}

//

function sortArray(array) {
  let oddList = array.filter((num) => num % 2).sort((a, b) => b - a);

  return array.map((num) => {
    return num % 2 ? oddList.pop() : num;
  });
}

//

function sortArray(array) {
  if (array.length == 0) {
    return array;
  }

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i; j < array.length; j++) {
      if (
        array[i] != 0 &&
        array[i] % 2 != 0 &&
        array[j] != 0 &&
        array[j] % 2 != 0
      ) {
        if (array[i] > array[j]) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }

  return array;
}

//





// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("should pass some sample tests", () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
    assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
    assert.deepEqual(sortArray([]), []);
  });
});
