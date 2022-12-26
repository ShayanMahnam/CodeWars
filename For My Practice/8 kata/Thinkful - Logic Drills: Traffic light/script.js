// my solution

function updateLight(current) {
  //your code here!
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : "green";
}


// other solutions
const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

  //

  function updateLight(current) {
    switch (current) {
      case "green":
        return "yellow";
        break;
      case "yellow":
        return "red";
        break;
      case "red":
        return "green";
        break;
      default:
        throw "Error: wrong input";
        break;
    }
  }




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(updateLight("green"), "yellow");
    assert.strictEqual(updateLight("yellow"), "red");
    assert.strictEqual(updateLight("red"), "green");
  });
});