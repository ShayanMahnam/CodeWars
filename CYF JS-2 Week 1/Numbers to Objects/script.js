// my solution
function numObj(s) {
  const arr = [];
  s.map((v) => arr.push(String.fromCharCode(v)));
  const obj = Array.from({ length: s.length }, (x) => (x = {}));
  obj.map((v, i) => (v[s[i]] = arr[i]));
  return obj;
}



// other solutions

const numObj = ($) => $.map((el) => ({ [el]: String.fromCodePoint(el) }));

//

const makeNumObj = (n) => ({ [n]: String.fromCharCode(n) });
const numObj = (arr) => arr.map(makeNumObj);

//

function numObj(s) {
  return s.map((n) => {
    const obj = {};
    obj[n] = String.fromCharCode(n);
    return obj;
  });
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Numbers  to Objects", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(numObj([118, 117, 120]), [
      { 118: "v" },
      { 117: "u" },
      { 120: "x" },
    ]);
    assert.deepEqual(numObj([101, 121, 110, 113, 113, 103]), [
      { 101: "e" },
      { 121: "y" },
      { 110: "n" },
      { 113: "q" },
      { 113: "q" },
      { 103: "g" },
    ]);
  });
});