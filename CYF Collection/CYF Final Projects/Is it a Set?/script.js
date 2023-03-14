// my solution

function isValidSet(quantities, shapes, colours, patterns) {
  // Check that all arrays have length 3
  if (
    quantities.length !== 3 ||
    shapes.length !== 3 ||
    colours.length !== 3 ||
    patterns.length !== 3
  ) {
    return false;
  }

  // Check if any property is the same on all cards
  //   for (let i = 0; i < 3; i++) {
  //     const values = [quantities[i], shapes[i], colours[i], patterns[i]];
  //     const uniqueValues = new Set(values);
  //     if (uniqueValues.size === 2) {
  //       return false;
  //     }
  //   }

  // Check if any property is different on all cards
  const allValues = [quantities, shapes, colours, patterns];
  for (let i = 0; i < 4; i++) {
    const uniqueValues = new Set(allValues[i]);
    if (uniqueValues.size === 2 || uniqueValues.size === 4) {
      return false;
    }
  }

  return true;
}


// other solutions

function isValidSet(...a) {
  return a.map((x) => new Set(x)).every((x) => x.size === 1 || x.size === 3);
}

//

function distinctOrIdentical(arr) {
  const s = new Set(arr);
  return s.size === 1 || s.size === arr.length;
}

function isValidSet(...props) {
  return props.every(distinctOrIdentical);
}

//

function isValidSet(quantities, shapes, colours, patterns) {
  const evaluate = [...arguments].map((arg) => {
    const x = new Set(arg);
    return x.size === 1 || (x.size === 3 && true);
  });
  return !evaluate.includes(false);
}

//

isValidSet = (...V) => V.every((x) => new Set(x).size % 2);

//

function isValidSet(quantities, shapes, colours, patterns) {
  let quantity = [...new Set(quantities)];
  let shape = [...new Set(shapes)];
  let colour = [...new Set(colours)];
  let pattern = [...new Set(patterns)];
  return (quantity.length === 1 || quantity.length === 3) &&
    (shape.length === 1 || shape.length === 3) &&
    (colour.length === 1 || colour.length === 3) &&
    (pattern.length === 1 || pattern.length === 3)
    ? true
    : false;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("should identify valid sets", function () {
  it("all different", function () {
    assert.isTrue(
      isValidSet(
        [1, 2, 3],
        ["diamond", "snake", "capsule"],
        ["green", "blue", "red"],
        ["blank", "striped", "solid"]
      )
    );
  });
  it("some same, some different", function () {
    assert.isTrue(
      isValidSet(
        [1, 1, 1],
        ["capsule", "diamond", "snake"],
        ["red", "red", "red"],
        ["striped", "blank", "solid"]
      )
    );
  });
  it("only pattern same", function () {
    assert.isTrue(
      isValidSet(
        [3, 1, 2],
        ["diamond", "capsule", "snake"],
        ["blue", "green", "red"],
        ["solid", "solid", "solid"]
      )
    );
  });
});

describe("should identify invalid sets", function () {
  it("invalid everything", function () {
    assert.isFalse(
      isValidSet(
        [1, 2, 1],
        ["diamond", "diamond", "snake"],
        ["blue", "red", "red"],
        ["blank", "blank", "striped"]
      )
    );
  });
  it("invalid quantities", function () {
    assert.isFalse(
      isValidSet(
        [1, 1, 3],
        ["diamond", "snake", "capsule"],
        ["green", "blue", "red"],
        ["blank", "striped", "solid"]
      )
    );
  });
});
