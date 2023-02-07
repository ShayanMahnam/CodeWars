// my solution

function overTheRoad(address, n){
  //code here
  return n * 2 + 1 - address;
}


// other solutions


function overTheRoad(address, n){
  //code here
  let total = 2*n;
  let difference = address-1;
  return total-difference;
}

//

let oddHouse = r => 1 + (r - 1) * 2
let evenHouse = (r,n) => 2 * n - (r - 1) * 2
let oddRow = h => (h + 1) / 2
let evenRow = (h,n) => (2 * n + 2 - h) / 2

let overTheRoad = (h, n) => !(n % 2) ? oddHouse(evenRow(h, n), n) : evenHouse(oddRow(h, n), n)

//

// function overTheRoad(address, n) {
// 	const isOdd = address % 2 !== 0;

// 	let parallel = isOdd ? 2 : 2 * n - 1;
  
  
//   for (let i = isOdd ? 2 * n - 1 : 2; i !== address; i = isOdd ? i - 2 : i + 2) {
//     isOdd ? parallel += 2 : parallel -= 2;
//   }

// 	return parallel;
// }

const overTheRoad = (a, n) => 2 * n - a + 1

// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Examples", function() {
  it("(1,3) --> 6", function() {
    assert.strictEqual(overTheRoad(1,3), 6);
  });
  it("(3,3) --> 4", function() {
    assert.strictEqual(overTheRoad(3,3), 4);
  });
  it("2,3) --> 5", function() {
    assert.strictEqual(overTheRoad(2,3), 5);
  });
  it("(3,5) --> 8", function() {
    assert.strictEqual(overTheRoad(3,5), 8);
  });
  it("(7,11) --> 16", function() {
    assert.strictEqual(overTheRoad(7,11), 16);
  });
  it("(23633656673,310027696726) --> 596421736780", function() {
    assert.strictEqual(overTheRoad(23633656673,310027696726), 596421736780);
  });
});
