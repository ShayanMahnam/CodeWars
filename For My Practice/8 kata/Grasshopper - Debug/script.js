// my solution

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c > 0) return c + " is above freezing temperature";
  else return c + " is freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}


// other solutions





// test
const { assert } = require("chai");

describe("celsius converter", function () {
  it("should get correct answer", function () {
    assert.strictEqual(weatherInfo(50), "10 is above freezing temperature");
    assert.strictEqual(weatherInfo(23), "-5 is freezing temperature");
  });
});