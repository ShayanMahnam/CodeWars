// my solution

var countSheep = function (num) {
  //your code here
  let sheep = "";
  for (let i = 1; i <= num; i++) {
    sheep += i.toString() + " sheep...";
  }
  return sheep;
};


// other solutions

var countSheep = function (num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;
};

//

countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``;



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});