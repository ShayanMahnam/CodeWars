// my solution
var flatten = function (array) {
  // TODO: Program me
  return [].concat(...array);
};



// other solutions

var flatten = function (lol) {
  return [].concat.apply([], lol);
};

//

var flatten = function (array) {
  return array.reduce(function (a, z) {
    return a.concat(z);
  }, []);
};

//

const flatten = (array) => [].concat(...array);

//

var flatten = function (array) {
  var res = [];
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (el instanceof Array) {
      for (var j = 0; j < el.length; j++) {
        res.push(el[j]);
      }
    } else {
      res.push(el);
    }
  }
  return res;
};



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(flatten([]), []);
    Test.assertSimilar(flatten([1, 2, 3]), [1, 2, 3]);
    Test.assertSimilar(
      flatten([
        [1, 2, 3],
        ["a", "b", "c"],
        [1, 2, 3],
      ]),
      [1, 2, 3, "a", "b", "c", 1, 2, 3]
    );
    Test.assertSimilar(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [
      3,
      4,
      5,
      [9, 9, 9],
      "a,b,c",
    ]);
    Test.assertSimilar(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
      [3],
      [4],
      [5],
      9,
      9,
      8,
      [1, 2, 3],
    ]);
  });
});
