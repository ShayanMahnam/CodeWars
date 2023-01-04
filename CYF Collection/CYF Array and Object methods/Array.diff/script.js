// my solution

function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}


// other solutions

function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

//

function array_diff(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}
//

function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Should pass Basic tests", () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(
      arrayDiff([1, 2, 2], [1]),
      [2, 2],
      "a was [1,2,2], b was [1]"
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], [2]),
      [1],
      "a was [1,2,2], b was [2]"
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], []),
      [1, 2, 2],
      "a was [1,2,2], b was []"
    );
    assert.deepEqual(arrayDiff([], [1, 2]), [], "a was [], b was [1,2]");
    assert.deepEqual(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      "a was [1,2,3], b was [1,2]"
    );
  });
});
