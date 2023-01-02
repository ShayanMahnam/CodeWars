// my solution

function move(position, roll) {
  // return the new position
  return position + roll * 2;
}


// other solutions

const move = (position, roll) => position + roll * 2;

//

function move(position, roll) {
  const newPosition = position + roll * 2;

  return newPosition;
}



// test

const Test = require("@codewars/test-compat");

describe("move function", () => {
  it("basic tests", () => {
    Test.assertEquals(move(0, 4), 8);
    Test.assertEquals(move(3, 6), 15);
    Test.assertEquals(move(2, 5), 12);
  });
});