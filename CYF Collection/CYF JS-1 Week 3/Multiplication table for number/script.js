// my solution
function multiTable(number) {
  // good luck
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((item) => `${item} * ${number} = ${item * number}`)
    .join("\n");
}



//Other solutions
const multiTable = (number) => {
  let table = "";

  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? "\n" : ""}`;
  }

  return table;
};
//
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join("\n");
}
//
function multiTable(number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table.slice(0, -1);
}




//Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      multiTable(5),
      "1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50"
    );
    assert.strictEqual(
      multiTable(1),
      "1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10"
    );
  });
});