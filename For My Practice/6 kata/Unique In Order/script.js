// my solution

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  var arr = [];
  for (var i = 0; i < iterable.length; i++) {
    // check if there is back to back letter
    if (iterable[i] !== iterable[i + 1]) {
      // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
};


// other solutions
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

//

var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
};

//

var uniqueInOrder = function (iterable) {
  var result = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i - 1] === undefined || iterable[i - 1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }
  return result;
};




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(uniqueInOrder("AAAABBBCCDAABBB"), [
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
  });
});
