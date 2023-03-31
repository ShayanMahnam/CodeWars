// my solution

function eliminateUnsetBits(number) {
  // First, remove all the unset bits ('0's) from the string

  const binaryString = number.replace(/0/g, "");

  if (binaryString === "") {
    return 0;
  }
  // Then, convert the resulting string to a decimal number
  const decimalNumber = parseInt(binaryString, 2);

  return decimalNumber;
}


// other solutions

function eliminateUnsetBits(number) {
  return parseInt(number.replace(/0/g, "") || 0, 2);
}

//

function eliminateUnsetBits(number) {
  return (number = parseInt(number.split("0").join(""), 2) || 0);
}

// test

const { assert } = require("chai");

describe("Fixed tests", function () {
  it("Testing for 11010101010101", () =>
    assert.strictEqual(eliminateUnsetBits("11010101010101"), 255));
  it("Testing for 111", () => assert.strictEqual(eliminateUnsetBits("111"), 7));
  it("Testing for 1000000", () =>
    assert.strictEqual(eliminateUnsetBits("1000000"), 1));
  it("Testing for 000", () => assert.strictEqual(eliminateUnsetBits("000"), 0));
});