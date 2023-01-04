// my solution

function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((prev, cur) => prev + cur); //something went wrong
}


// other solutions
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((a, b) => a + b);
}

//

function arrayPlusArray(...arrays) {
  // accepts indefinite number of arrays
  return [].concat(...arrays).reduce((a, b) => a + b, 0);
}

//

function arrayPlusArray(arr1, arr2) {
  var suma = 0;
  for (var i = 0; i < arr1.length; i++) suma += arr1[i];
  for (var i = 0; i < arr2.length; i++) suma += arr2[i];
  return suma;
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  });
});