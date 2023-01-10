// my solution
function tribonacci(signature, n) {
  //your code here
  if (n === 0) return [];
  if (n <= 3) return signature.slice(0, n);
  for (let i = 3; i < n; i++) {
    signature.push(signature[i - 3] + signature[i - 2] + signature[i - 1]);
  }
  return signature;
}



// other solutions

function tribonacci(s, n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr;
}

//

function tribonacci(sign, n) {
  for (var i = 3; i < n; i++) {
    sign[i] = sign[i - 1] + sign[i - 2] + sign[i - 3];
  }
  return sign.slice(0, n);
}



// test

const { assert, config } = require("chai");
config.truncateThreshold = 0;

describe("Basic tests", function () {
  function doTest(input, expected) {
    let [sig, len] = input;
    it(`Testing signature=[${sig}], n=${len}`, () => {
      assert.deepEqual(tribonacci(sig, len), expected);
    });
  }

  doTest([[1, 1, 1], 10], [1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
  doTest([[0, 0, 1], 10], [0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  doTest([[0, 1, 1], 10], [0, 1, 1, 2, 4, 7, 13, 24, 44, 81]);
  doTest([[1, 0, 0], 10], [1, 0, 0, 1, 1, 2, 4, 7, 13, 24]);
  doTest([[0, 0, 0], 10], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  doTest([[1, 2, 3], 10], [1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
  doTest([[3, 2, 1], 10], [3, 2, 1, 6, 9, 16, 31, 56, 103, 190]);
  doTest([[1, 1, 1], 1], [1]);

  doTest([[300, 200, 100], 0], []);
});