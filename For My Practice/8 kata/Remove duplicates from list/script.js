// my solution
function distinct(a) {
  return [...new Set(a)];
}



// other solutions
function distinct(a) {
  return Array.from(new Set(a));
}
//
function distinct(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

//
const distinct = (a) => a.filter((item, index) => a.indexOf(item) === index);






// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1, 2]), [1, 2]);
    assert.deepEqual(distinct([1, 1, 2]), [1, 2]);
  });
});
