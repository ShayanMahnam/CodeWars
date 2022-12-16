// my solution

function descendingOrder(n) {
  //...
  var arr = n
    .toString()
    .split("")
    .sort(function (a, b) {
      return b - a;
    });
  return Number(arr.join(""));
}


// other solutions

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

//

function descendingOrder(n) {
  return +(n + "")
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
}



// test

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(descendingOrder(0), 0);
    assert.strictEqual(descendingOrder(1), 1);
    assert.strictEqual(descendingOrder(111), 111);
    assert.strictEqual(descendingOrder(15), 51);
    assert.strictEqual(descendingOrder(1021), 2110);
    assert.strictEqual(descendingOrder(123456789), 987654321);
  });
});