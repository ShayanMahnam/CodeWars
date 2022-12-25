// my solution

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}


// other solutions
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

//

function findNextSquare(sq) {
  var number = Math.sqrt(sq);
  if (Math.round(number) === number) {
    return Math.pow(++number, 2);
  }
  return -1;
}

//

function findNextSquare(sq) {
  let r = Math.sqrt(sq);
  return r % 1 ? -1 : ++r * r;
}




// test

const Test = require("@codewars/test-compat");

describe("findNextSquare", function () {
  it("should return the next square for perfect squares", function () {
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    Test.assertEquals(
      findNextSquare(319225),
      320356,
      "Wrong output for 319225"
    );
    Test.assertEquals(
      findNextSquare(15241383936),
      15241630849,
      "Wrong output for 15241383936"
    );
  });

  it("should return -1 for numbers which aren't perfect squares", function () {
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    Test.assertEquals(
      findNextSquare(342786627),
      -1,
      "Wrong output for 342786627"
    );
  });
});
