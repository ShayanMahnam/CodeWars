// my solution
function rentalCarCost(d) {
  // Your solution here
  let total = 0;
  for (let i = d; i > 0; i--) {
    total += 40;
  }
  return d >= 3 && d < 7 ? total - 20 : d >= 7 ? total - 50 : total;
}



// other solutions

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3) {
    return 20;
  } else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

//

const rentalCarCost = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);

//

function rentalCarCost(d) {
  if (d < 3) return d * 40;
  if (7 > d && d >= 3) return d * 40 - 20;
  if (d >= 7) return d * 40 - 50;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Regular Tests:", function () {
  it("Should work for under 3 days:", function () {
    assert.strictEqual(rentalCarCost(1), 40);
    assert.strictEqual(rentalCarCost(2), 80);
  });

  it("Should work for under 7 days:", function () {
    assert.strictEqual(rentalCarCost(3), 100);
    assert.strictEqual(rentalCarCost(4), 140);
    assert.strictEqual(rentalCarCost(5), 180);
    assert.strictEqual(rentalCarCost(6), 220);
  });

  it("Should work for 7 or more days:", function () {
    assert.strictEqual(rentalCarCost(7), 230);
    assert.strictEqual(rentalCarCost(8), 270);
    assert.strictEqual(rentalCarCost(9), 310);
    assert.strictEqual(rentalCarCost(10), 350);
  });
});