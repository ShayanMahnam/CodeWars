// my solution

function squareOrSquareRoot(array) {
  return array.map((x) => (Math.sqrt(x) % 1 ? x ** 2 : Math.sqrt(x)));
}


// other solutions

function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}

//

function squareOrSquareRoot(array) {
  var processed = [];

  for (var i = 0; i < array.length; i++) {
    var number = array[i];

    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    } else {
      processed.push(number * number);
    }
  }
  return processed;
}



// test

const Test = require("@codewars/test-compat");

describe("Solution", function () {
  it("basic tests", function () {
    var input = [4, 3, 9, 7, 2, 1];
    var expected = [2, 9, 3, 49, 4, 1];
    Test.assertSimilar(squareOrSquareRoot(input), expected);

    input = [100, 101, 5, 5, 1, 1];
    expected = [10, 10201, 25, 25, 1, 1];
    Test.assertSimilar(squareOrSquareRoot(input), expected);

    input = [1, 2, 3, 4, 5, 6];
    expected = [1, 4, 9, 2, 25, 36];
    Test.assertSimilar(squareOrSquareRoot(input), expected);
  });
});