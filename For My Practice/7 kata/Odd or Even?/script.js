// my solution
function oddOrEven(array) {
  //enter code here
  let sum = array.reduce((prev, cur) => prev + cur, 0);
  return sum % 2 === 0 ? "even" : "odd";
}



// other solutions
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

//

function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

//

const oddOrEven = (a) =>
  a.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd";




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("Edge tests", () => {
    assert.strictEqual(oddOrEven([0]), "even");
    assert.strictEqual(oddOrEven([1]), "odd");
    assert.strictEqual(oddOrEven([]), "even");
  });

  it("Even tests", () => {
    assert.strictEqual(oddOrEven([0, 1, 5]), "even");
    assert.strictEqual(oddOrEven([0, 1, 3]), "even");
    assert.strictEqual(oddOrEven([1023, 1, 2]), "even");
  });

  it("Negative Even tests", () => {
    assert.strictEqual(oddOrEven([0, -1, -5]), "even");
    assert.strictEqual(oddOrEven([0, -1, -3]), "even");
    assert.strictEqual(oddOrEven([-1023, 1, -2]), "even");
  });

  it("Odd tests", () => {
    assert.strictEqual(oddOrEven([0, 1, 2]), "odd");
    assert.strictEqual(oddOrEven([0, 1, 4]), "odd");
    assert.strictEqual(oddOrEven([1023, 1, 3]), "odd");
  });

  it("Negative Odd tests", () => {
    assert.strictEqual(oddOrEven([0, -1, 2]), "odd");
    assert.strictEqual(oddOrEven([0, 1, -4]), "odd");
    assert.strictEqual(oddOrEven([-1023, -1, 3]), "odd");
  });
});
