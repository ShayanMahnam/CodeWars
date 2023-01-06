// my solution

function nbDig(n, d) {
  let k = 0;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2);
  }
  arr
    .filter((x) => x.toString().includes(d))
    .join("")
    .split("")
    .forEach((x) => (x == d ? k++ : null));
  return k;
}

// other solutions

function nbDig(n, d) {
  var res = 0;
  for (var g = 0; g <= n; g++) {
    var square = (g * g + "").split("");
    square.forEach((s) => (s == d ? res++ : null));
  }
  return res;
}

//

function nbDig(n, d) {
  var o = "";
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1;
}

//

nbDig = (n, d) =>
  Array.from(Array(n + 1), (e, i) => i * i)
    .join("")
    .match(new RegExp(d, "g")).length;



// test

const assert = require("chai").assert;
describe("nbDig", () => {
  it("Basic tests", () => {
    assert.strictEqual(nbDig(5750, 0), 4700, "n = 5750, d = 0");
    assert.strictEqual(nbDig(11011, 2), 9481, "n = 11011, d = 2");
    assert.strictEqual(nbDig(12224, 8), 7733, "n = 12224, d = 8");
    assert.strictEqual(nbDig(11549, 1), 11905, "n = 11549, d = 1");
  });
});