// my solution
function deleteValues(array, pred) {
  var i = 0;
  while (i < array.length) {
    if (pred(array[i])) {
      array.splice(i, 1);
    } else {
      i++;
    }
  }
  return array;
}



// other solutions
function deleteValues(array, pred) {
  for (var i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      array.splice(i--, 1);
    }
  }
  return array;
}

//

function deleteValues(array, pred) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (pred(array[i])) {
      array.splice(i, 1);
    }
  }
  return array;
}

//

function deleteValues(array, pred) {
  var temp = array.filter(function (item) {
    return !pred(item);
  });
  array.length = 0;
  array.push.apply(array, temp);
  return array;
}




// test

// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should test for something", function() {
     Test.assertEquals(1 + 1, 2);
     assert.strictEqual(1 + 1, 2);
  });
});
