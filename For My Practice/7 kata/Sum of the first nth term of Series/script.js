// my solution


function SeriesSum(n) {
  // Happy Coding ^_^
  let result = 0;
  let reverage = 1;
  for (let i = 0; i < n; i += 1) {
    if (i === 0) {
      result = 1;
    } else {
      reverage += 3;
      result = result + 1 / reverage;
    }
  }
  return result.toFixed(2);
}

// other solutions

function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

//

function SeriesSum(n) {
  for (a = 0, i = 1; i <= n * 3; i += 3) a += 1 / i;
  return a.toFixed(2);
}

//

function SeriesSum(n) {
  return Array(n)
    .fill(0)
    .map((e, i) => 3 * i + 1)
    .reduce((s, e) => s + 1 / e, 0)
    .toFixed(2);
}



// test
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(SeriesSum(1), "1.00");
    Test.assertEquals(SeriesSum(2), "1.25");
    Test.assertEquals(SeriesSum(3), "1.39");
    Test.assertEquals(SeriesSum(4), "1.49");
  });
});
