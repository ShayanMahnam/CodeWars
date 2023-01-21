// my solution

function getDivisorsCnt(n) {
  // todo
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
}


// other solutions

function getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }

  return d;
}

//

function getDivisorsCnt(n) {
  var div = 0;
  for (var i = 1; i <= n; i++) if (n % i == 0) div++;
  return div;
}

//

const getDivisorsCnt = (n) =>
  [...Array((n / 2) ^ 0)].reduce((pre, _, idx) => (n % ++idx ? pre : ++pre), 1);



// test
const assert = require("chai").assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getDivisorsCnt(1), 1);
    assert.strictEqual(getDivisorsCnt(10), 4);
    assert.strictEqual(getDivisorsCnt(11), 2);
    assert.strictEqual(getDivisorsCnt(54), 8);
  });
});
