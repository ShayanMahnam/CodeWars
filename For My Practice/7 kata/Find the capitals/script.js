// my solution


var capitals = function (word) {
  // Write your code here
  let arr = word.split("");
  let countsArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) countsArr.push(i);
  }
  return countsArr;
};

// other solutions
var capitals = function (word) {
  var caps = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() == word[i]) caps.push(i);
  }
  return caps;
};

//

var capitals = function (word) {
  return word.split("").reduce(function (memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

//

var capitals = function (word) {
  return word
    .split("")
    .map(function (l, i) {
      if (l.toUpperCase() === l) return i;
    })
    .filter(function (i) {
      return i != null;
    });
};




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals("CodEWaRs"), [0, 3, 4, 6]);
  });
});