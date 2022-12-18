// my solution

var min = function (list) {
  return list.sort((a, b) => a - b)[0];
};

var max = function (list) {
  return list.sort((a, b) => b - a)[0];
};


// other solutions


const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//

var min = function (list) {
  return Math.min.apply(null, list);
};

var max = function (list) {
  return Math.max.apply(null, list);
};


// test

const Test = require("@codewars/test-compat");

describe("Test", function () {
  it("Examples", function () {
    Test.assertEquals(min([-52, 56, 30, 29, -54, 0, -110]), -110);
    Test.assertEquals(min([42, 54, 65, 87, 0]), 0);
    Test.assertEquals(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
    Test.assertEquals(max([5]), 5);
  });
});