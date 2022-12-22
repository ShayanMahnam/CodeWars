// my solution

function invert(array) {
  let newArr = [];
  for (let el of array) {
    newArr.push(-el);
  }
  return newArr;
}


//Other solutions

const invert = (array) => array.map((num) => -num);
//
function invert(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    newArr.push(-array[i]);
  }
  return newArr;
}
//
function invert(array) {
  return array.map((e) => e * -1);
}



//Test
const Test = require("@codewars/test-compat");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Invert array values", () => {
  it("Basic Tests", () => {
    assert.deepEqual(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
    assert.deepEqual(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
    assert.deepEqual(invert([]), []);
    assert.deepEqual(invert([0]), [-0]);
  });
});