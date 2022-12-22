//My Solution
function bonusTime(salary, bonus) {
  // your code here
  if (bonus) {
    return `£${salary * 10}`;
  } else {
    return `£${salary}`;
  }
}
//Other answers
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
//
const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;
//
function bonusTime(salary, bonus) {
  return "£" + salary * (bonus ? 10 : 1);
}
//
function bonusTime(salary, bonus) {
  if (bonus) {
    return "£" + (salary * 10).toString();
  }
  return "£" + salary.toString();
}
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(bonusTime(10000, true), "£100000");
    assert.strictEqual(bonusTime(25000, true), "£250000");
    assert.strictEqual(bonusTime(10000, false), "£10000");
    assert.strictEqual(bonusTime(60000, false), "£60000");
    assert.strictEqual(bonusTime(2, true), "£20");
    assert.strictEqual(bonusTime(78, false), "£78");
    assert.strictEqual(bonusTime(67890, true), "£678900");
  });
});