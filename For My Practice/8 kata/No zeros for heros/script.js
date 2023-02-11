// my solution

function noBoringZeros(n) {
  // your code
  let str_n = n.toString();
  while (str_n.endsWith("0") && str_n.length > 1) {
    str_n = str_n.slice(0, -1);
  }
  return parseInt(str_n);
}


// other solutions

function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

//

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

//

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10;
  }
  return n;
}

///

function noBoringZeros(n) {
  return Number(String(n).replace(/0+$/, ""));
}



// test
const Test = require("@codewars/test-compat");

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", function () {
  it("noBoringZeros", function () {
    assert.strictEqual(noBoringZeros(1450), 145);
    assert.strictEqual(noBoringZeros(960000), 96);
    assert.strictEqual(noBoringZeros(1050), 105);
    assert.strictEqual(noBoringZeros(-1050), -105);
    assert.strictEqual(noBoringZeros(-105), -105);
    assert.strictEqual(noBoringZeros(0), 0);
  });
});
