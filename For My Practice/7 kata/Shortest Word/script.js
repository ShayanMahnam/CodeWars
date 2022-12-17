// my solution

function findShort(s) {
  let arr = s.split(" ").sort((a, b) => a.length - b.length);
  return arr[0].length;
}


// other solutions

function findShort(s) {
  return Math.min.apply(
    null,
    s.split(" ").map((w) => w.length)
  );
}

//

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

//

function findShort(s) {
  var arr = s.split(" ");
  var smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest.length;
}

//

const findShort = (s) =>
  s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      findShort("bitcoin take over the world maybe who knows perhaps"),
      3
    );
    assert.strictEqual(
      findShort(
        "turns out random test cases are easier than writing out basic ones"
      ),
      3
    );
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });
});
