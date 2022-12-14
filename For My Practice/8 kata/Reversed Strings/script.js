// my solution

function solution(str) {
  return str.split("").reverse().join("");
}

// other solutions

const solution = (str) => str.split("").reverse().join("");
//

const solution = (s) => [...s].reverse().join("");
//

function solution(s) {
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) o += s[i];
  return o;
}


// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution("world"), "dlrow");
    assert.strictEqual(solution("hello"), "olleh");
    assert.strictEqual(solution(""), "");
    assert.strictEqual(solution("h"), "h");
  });
});  