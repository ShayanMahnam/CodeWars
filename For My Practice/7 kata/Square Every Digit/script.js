// my solution

function squareDigits(num) {
  var myArr = String(num)
    .split("")
    .map((num) => {
      return Number(num ** 2);
    });
  return Number(myArr.join(""));
}


// other solutions

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

//

function squareDigits(num) {
  return +num
    .toString()
    .split("")
    .map((i) => i * i)
    .join("");
}

//

function squareDigits(num) {
  var array = num
    .toString()
    .split("")
    .map(function (int) {
      var i = parseInt(int);
      return i * i;
    });

  return parseInt(array.join(""));
}

//

function squareDigits(num) {
  return +String(num)
    .split("")
    .map(function (num) {
      return +num * +num;
    })
    .join("");
}



// test

const { assert } = require("chai");

describe("Basic tests", () => {
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
});