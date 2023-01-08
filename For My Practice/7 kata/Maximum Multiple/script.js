// my solution

function maxMultiple(divisor, bound) {
  //your code here
  let arr = [];
  for (let i = 1; i <= bound; i++) {
    arr.push(i);
  }
  let filteredArr = arr.filter((x) => x % divisor === 0 && x <= bound);
  return filteredArr[filteredArr.length - 1];
}


// other solutions
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

//

function maxMultiple(divisor, bound) {
  return Math.floor(bound / divisor) * divisor;
}

//

function maxMultiple(divisor, bound) {
  while (bound % divisor) {
    bound--;
  }

  return bound;
}

//

function maxMultiple(divisor, bound) {
  var max = 0;
  for (let j = divisor; j <= bound; j++) {
    if (j % divisor == 0 && j > max) {
      max = j;
    }
  }
  return max;
}

//

function maxMultiple(divisor, bound) {
  let arr = [];
  for (let i = divisor; i <= bound; i++) {
    if (i % divisor == 0) {
      arr.push(i);
    }
  }
  return Math.max(...arr);
}


// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(maxMultiple(2, 7), 6);
    assert.strictEqual(maxMultiple(3, 10), 9);
    assert.strictEqual(maxMultiple(7, 17), 14);
    assert.strictEqual(maxMultiple(10, 50), 50);
    assert.strictEqual(maxMultiple(37, 200), 185);
    assert.strictEqual(maxMultiple(7, 100), 98);
  });
});
