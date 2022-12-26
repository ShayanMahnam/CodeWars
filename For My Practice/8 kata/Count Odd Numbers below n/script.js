// my solution

function oddCount(n) {
  // your code here
  //   let arr = []
  //   for( let i = 1; i < n; i++){
  //     if (i % 2 !== 0){
  //       arr.push(i)
  //     }
  //   }
  //   return arr.length
  return Math.floor(n / 2);
}


// other solutions
function oddCount(n) {
  /*
  var returnArray = [];
  for(var i=1;i<n;i=i+2) {
    returnArray.push(i);
  }
  return returnArray.length;
 */
  return parseInt(n / 2);
}

//






// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(oddCount(15), 7, "Oops! Wrong.");
    assert.strictEqual(oddCount(15023), 7511, "Oops! Wrong.");
  });
});
