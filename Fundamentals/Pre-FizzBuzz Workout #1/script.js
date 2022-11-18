//My Solution
function preFizz(n) {
  return Array.from({ length: n }, (v, i) => i + 1);
}
//correct answers
function preFizz(n) {
  var output = [];
  for (var i = 1; i <= n; i++) {
    output.push(i);
  }
  return output;
}
//
const preFizz = (n) => Array.from({ length: n }, (_, i) => i + 1);
//
let preFizz = (n) => [...Array(n)].map((x, i) => i + 1);
//Sample Tests
const { assert } = require("chai");

describe("Fixed Tests", () => {
  it("Test", () => {
    assert.sameOrderedMembers(preFizz(1), [1], `Array should be from 1 to 1`);
    assert.sameOrderedMembers(
      preFizz(2),
      [1, 2],
      `Array should be from 1 to 2`
    );
    assert.sameOrderedMembers(
      preFizz(3),
      [1, 2, 3],
      `Array should be from 1 to 3`
    );
    assert.sameOrderedMembers(
      preFizz(4),
      [1, 2, 3, 4],
      `Array should be from 1 to 4`
    );
    assert.sameOrderedMembers(
      preFizz(5),
      [1, 2, 3, 4, 5],
      `Array should be from 1 to 5`
    );
  });
});
