// my solution

function peopleWithAgeDrink(old) {
  return old <= 13 ? "drink toddy" : old > 13 && old <= 17 ? "drink coke" : old >= 18 && old < 21 ? "drink beer" : "drink whisky" ;
};


// other solutions

const peopleWithAgeDrink = (age) =>
  age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";

//

var peopleWithAgeDrink = function (old) {
  if (old >= 21) return "drink whisky";
  if (old >= 18) return "drink beer";
  if (old >= 14) return "drink coke";
  return "drink toddy";
};



// test

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(peopleWithAgeDrink(22), "drink whisky");
  });
});