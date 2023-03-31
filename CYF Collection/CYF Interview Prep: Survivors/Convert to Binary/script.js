// my solution
function toBinary(n) {
  return Number(n.toString(2));
}



// other solutions

let toBinary = (n) => +n.toString(2);

//


function largestPowerOf(n, number) {
  var p = number;
  while (p < n) {
    p *= number;
  }
  return p;
}

function toBinary(n) {
  var binaryString = "";
  var power = largestPowerOf(n, 2);
  while (power >= 1) {
    if (n - power >= 0) {
      n -= power;
      binaryString += "1";
    } else {
      binaryString += "0";
    }
    power /= 2;
  }
  return parseInt(binaryString);
}

//

function toBinary(n) {
  return parseInt(n.toString(2));
}

//

function toBinary(n) {
  let arr = [];
  for (let i = n; i >= 1; i = Math.floor(i / 2)) {
    arr.push(i % 2 === 0 ? 0 : 1);
  }
  return Number(arr.reverse().join(""));
}


// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(toBinary(1), 1);
    assert.strictEqual(toBinary(2), 10);
    assert.strictEqual(toBinary(3), 11);
    assert.strictEqual(toBinary(5), 101);
  });
});