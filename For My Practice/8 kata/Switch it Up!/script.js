// my solution
function switchItUp(number) {
  //Write your own Code!
  const nums = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return nums[number];
}



// other solutions
switchItUp = (n) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][n];

  //

  function switchItUp(number) {
    switch (number) {
      case 0:
        return "Zero";
      case 1:
        return "One";
      case 2:
        return "Two";
      case 3:
        return "Three";
      case 4:
        return "Four";
      case 5:
        return "Five";
      case 6:
        return "Six";
      case 7:
        return "Seven";
      case 8:
        return "Eight";
      case 9:
        return "Nine";
      default:
        return "Unknown number";
    }
  }

  //

  function switchItUp(n) {
    return [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ][n];
  }



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1), "One");
    assert.strictEqual(switchItUp(3), "Three");
    assert.strictEqual(switchItUp(5), "Five");
  });
});
