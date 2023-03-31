// my solution

function roundAndRound(n, a, b) {
  //coding and coding..
  if (b === 0) {
    return a;
  }
  // Calculate the number of entrances to walk before stopping
  const steps = Math.abs(b) % n;
  if (steps === 0) {
    return a; // Ram ends up where he started
  }

  // Calculate the direction of the walk (clockwise or counterclockwise)
  const direction = b > 0 ? 1 : -1;

  // Calculate the number of the house at the end of Ram's walk
  let endHouse = a;
  for (let i = 0; i < steps; i++) {
    endHouse += direction;
    if (endHouse > n) {
      endHouse = 1;
    } else if (endHouse < 1) {
      endHouse = n;
    }
  }
  return endHouse;
}


// other solutions
function roundAndRound(n, a, b) {
  let endDoor = (a + b) % n;

  if (endDoor < 1) endDoor += n;

  return endDoor;
}

//

function roundAndRound(n, a, b) {
  let rest = (a + b) % n;
  return rest < 0 ? n + rest : rest || n;
}

//

function roundAndRound(n, a, b) {
  return (a + (b % n) + n) % n || n;
}



// test
const Test = require("@codewars/test-compat");

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(roundAndRound(6, 2, -5), 3);

    Test.assertEquals(roundAndRound(5, 1, 3), 4);

    Test.assertEquals(roundAndRound(3, 2, 7), 3);

    Test.assertEquals(roundAndRound(100, 1, -1), 100);

    Test.assertEquals(roundAndRound(100, 54, 100), 54);

    Test.assertEquals(roundAndRound(97, 37, -92), 42);

    Test.assertEquals(roundAndRound(99, 41, 0), 41);

    Test.assertEquals(roundAndRound(35, 34, 1), 35);

    Test.assertEquals(roundAndRound(3, 2, -100), 1);

    Test.assertEquals(roundAndRound(1, 1, -100), 1);

    Test.assertEquals(roundAndRound(100, 1, -100000), 1);

    Test.assertEquals(roundAndRound(333, 222, 111), 333);
  });
});