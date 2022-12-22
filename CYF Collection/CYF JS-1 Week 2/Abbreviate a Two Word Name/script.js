//My Solution
function abbrevName(name) {
  var nam = name.split(" ");
  return nam[0].charAt(0).toUpperCase() + "." + nam[1].charAt(0).toUpperCase();
}
//Other answers
function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
//
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
//
function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.substr(0, 1).toUpperCase())
    .join(".");
}
//
const abbrevName = (name) => name.match(/\b\w/g).join(".").toUpperCase();
//Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(abbrevName("Sam Harris"), "S.H");
    assert.strictEqual(abbrevName("Patrick Feenan"), "P.F");
    assert.strictEqual(abbrevName("Evan Cole"), "E.C");
    assert.strictEqual(abbrevName("P Favuzzi"), "P.F");
    assert.strictEqual(abbrevName("David Mendieta"), "D.M");
  });
});