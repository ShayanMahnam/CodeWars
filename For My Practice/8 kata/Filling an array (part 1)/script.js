// my solution

const arr = (N) => Array.from({ length: N }, (_, i) => i);


// other solutions
function arr(n) {
  var newArr = [];
  for (var i = 0; i < n; i++) {
    newArr.push(i);
  }
  return newArr;
}

//

const arr = (n = 0) => [...Array(n).keys()];




// test

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("#arr creates a new array with the numbers 0 to N-1", () => {
  it("should return an array", () => assert.isArray(arr()));
  it("should return a blank array when called with no argument", () =>
    assert.sameMembers(arr(), []));
  it("should return 0 to 3 when called with 4", () =>
    assert.sameMembers(arr(4), [0, 1, 2, 3]));
});