// my solution

function reverseList(list) {
  return list.reverse();
}


// other solutions


function reverseList(list) {
  return list.slice().reverse();
}

//

function reverseList(list) {
  var array = [];
  for (var i = list.length - 1; i >= 0; i--) {
    array.push(list[i]);
  }
  return array;
}


// test
const Test = require("@codewars/test-compat");

describe("reverseList", function () {
  it("should reverse some sample arrays", function () {
    Test.assertSimilar(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
    Test.assertSimilar(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);
  });
});