// my solution

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump <= mpg * fuelLeft ? true : false;


// other solutions

const zeroFuel2 = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump / mpg <= fuelLeft;
};

//

const zeroFuel3 = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};



// test

const assert = require("chai").assert;

describe("zeroFill", function () {
  it("Sample Tests", function () {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});