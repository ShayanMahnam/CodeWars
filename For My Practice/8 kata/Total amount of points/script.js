// my solution


const points = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);

// other solutions

function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

//

const points = (a) =>
  a.reduce((r, e) => {
    const x = e[0];
    const y = e[2];
    return r + (x > y ? 3 : x < y ? 0 : 1);
  }, 0);


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Total amount of points", function () {
  it("Sample Tests", function () {
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "3:1",
        "4:1",
        "3:2",
        "4:2",
        "4:3",
      ]),
      30
    );
    assert.strictEqual(
      points([
        "1:1",
        "2:2",
        "3:3",
        "4:4",
        "2:2",
        "3:3",
        "4:4",
        "3:3",
        "4:4",
        "4:4",
      ]),
      10
    );
    assert.strictEqual(
      points([
        "0:1",
        "0:2",
        "0:3",
        "0:4",
        "1:2",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      0
    );
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:0",
        "2:1",
        "1:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      15
    );
    assert.strictEqual(
      points([
        "1:0",
        "2:0",
        "3:0",
        "4:4",
        "2:2",
        "3:3",
        "1:4",
        "2:3",
        "2:4",
        "3:4",
      ]),
      12
    );
  });
});