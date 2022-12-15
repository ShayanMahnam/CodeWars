// my solution

const digitize = (n) => n.toString().split("").map(Number).reverse();


// other solutions

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

//

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

//

function digitize(n) {
  return (n + "").split("").map(Number).reverse();
}

//

const digitize = (x) => {
  x = `${x}`.split("").reverse();
  let a = [];
  for (let i = 0; i < x.length; i++) {
    a.push(+x[i]);
  }
  return a;
};



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(digitize(35231), [1, 3, 2, 5, 3]);
    assert.deepEqual(digitize(0), [0]);
  });
});
