// my solution
function maps(x) {
  const arr = [];
  for (let el of x) {
    arr.push(el * 2);
  }
  return arr;
}



//Other solutions
function maps(x) {
  return x.map((n) => n * 2);
}
//
maps = (x) => x.map((e) => e * 2);
//
function maps(x) {
  //return x.map(el => el * 2);
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}




//Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
  });
});