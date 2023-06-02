// my solution


function orderWeight(str) {
  // Split the string into an array of individual weights
  const weights = str.trim().split(/\s+/);

  // Custom sorting function
  function compareWeights(a, b) {
    const weightA = getWeight(a);
    const weightB = getWeight(b);

    if (weightA === weightB) {
      // If weights are equal, compare as strings
      return a.localeCompare(b);
    } else {
      return weightA - weightB;
    }
  }

  // Helper function to calculate the weight of a number
  function getWeight(number) {
    return number
      .split("")
      .map((digit) => parseInt(digit, 10))
      .reduce((sum, digit) => sum + digit, 0);
  }

  // Sort the array of weights using the custom sorting function
  const sortedWeights = weights.sort(compareWeights);

  // Join the sorted array back into a string
  return sortedWeights.join(" ");
}

// other solutions

function orderWeight(strng) {
  const sum = (str) => str.split("").reduce((sum, el) => sum + +el, 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  }
  return strng.split(" ").sort(comp).join(" ");
}

//

function orderWeight(str) {
  const sum = (x) => x.split("").reduce((res, cur) => res + +cur, 0);
  return str
    .split(" ")
    .sort((a, b) => {
      const diff = sum(a) - sum(b);
      return diff == 0 ? (a > b ? 1 : -1) : diff;
    })
    .join(" ");
}



// test

const { assert } = require("chai");

describe("Order Weights", function () {
  it("Basic tests", function () {
    assert.strictEqual(
      orderWeight("103 123 4444 99 2000"),
      "2000 103 123 4444 99"
    );
    assert.strictEqual(
      orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"),
      "11 11 2000 10003 22 123 1234000 44444444 9999"
    );
  });
});