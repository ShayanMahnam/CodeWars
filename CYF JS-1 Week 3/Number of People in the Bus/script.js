// my solution
var number = function (busStops) {
  // Good Luck!
  let x = 0;
  busStops.forEach((a) => (x = x + a[0] - a[1]));
  return x;
};



//Other solutions
const number = (busStops) =>
  busStops.reduce((rem, [on, off]) => rem + on - off, 0);
  //
  var number = function (busStops) {
    var totalPeople = 0;
    for (var i = 0; i < busStops.length; i++) {
      totalPeople += busStops[i][0];
      totalPeople -= busStops[i][1];
    }
    return totalPeople;
  };
  //
  var number = function (busStops) {
    return busStops.map((x) => x[0] - x[1]).reduce((x, y) => x + y);
  };




//Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      number([
        [10, 0],
        [3, 5],
        [5, 8],
      ]),
      5
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ]),
      17
    );
    assert.strictEqual(
      number([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ]),
      21
    );
    assert.strictEqual(number([[0, 0]]), 0);
  });
});