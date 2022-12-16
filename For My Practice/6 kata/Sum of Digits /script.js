// my solution

function digitalRoot(n) {
  if (n < 10) return n;
  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce((acc, d) => {
        return acc + +d;
      }, 0)
  );
}


// other solutions
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

//

function digital_root(n) {
  if (n < 10) return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);

  return digital_root(sum);
}

//

function digital_root(n) {
  n = eval(n.toString().split("").join("+"));

  if (n > 9) {
    return digital_root(n);
  }

  return n;
}

//

function digital_root(n) {
  if (n < 10) return n;
  return digital_root((n % 10) + digital_root(Math.floor(n / 10)));
}

//

function digital_root(n) {
  return (--n % 9) + 1;
}

//

function digital_root(n) {
  return n < 10
    ? n
    : digital_root(
        String(n)
          .split("")
          .reduce((s, v) => Number(s) + Number(v))
      );
}

//

function digital_root(n) {
  while (n > 9) {
    n = ("" + n).split("").reduce(function (s, d) {
      return +s + +d;
    });
  }
  return n;
}

//

function digital_root(n) {
  let finalSum = 10,
    tempSum = 0;
  while (finalSum > 9) {
    while (n > 9) {
      tempSum += n % 10;
      n = parseInt(n / 10);
    }
    tempSum += n;
    finalSum = tempSum;
    n = finalSum;
    tempSum = 0;
  }
  return finalSum;
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(digitalRoot(16), 7);
    assert.strictEqual(digitalRoot(456), 6);
  });
});
