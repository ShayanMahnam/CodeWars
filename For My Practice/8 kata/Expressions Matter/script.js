// my solution

function expressionMatter(a, b, c) {
  let taksOne = a * (b + c);
  let taksTwo = a * b * c;
  let taksThree = a + b * c;
  let taksFour = (a + b) * c;
  let taskFive = a + b + c;
  let arr = [];
  arr.push(taksOne, taksTwo, taksThree, taksFour, taskFive);
  return Math.max(...arr);
}


// other solutions
function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c
  );
}

//

function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}

//

function expressionMatter(a, b, c) {
  if (a == 1 && b == 1 && c == 1) {
    return 3;
  }

  if (a != 1 && b != 1 && c != 1) {
    return a * b * c;
  }
  if (a == 1 && b != 1 && c != 1) {
    return (a + b) * c;
  }
  if (a != 1 && b != 1 && c == 1) {
    return a * (b + c);
  }

  if (a != 1 && b == 1 && c == 1) {
    return a * 2;
  }

  if (a == 1 && b == 1 && c != 1) {
    return c * 2;
  }

  if (a == 1 && b != 1 && c == 1) {
    if (a == c) {
      return a + b + c;
    }
    if (a > c) {
      return a * (b + c);
    }
    if (a < c) {
      return (a + b) * c;
    }
  }

  if (a != 1 && b == 1 && c != 1) {
    if (a == c) {
      return (a + b) * c;
    }
    if (a > c) {
      return a * (b + c);
    }
    if (a < c) {
      return (a + b) * c;
    }
  }
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Fixed tests", function () {
  it("Small values", function () {
    assert.strictEqual(expressionMatter(2, 1, 2), 6);
    assert.strictEqual(expressionMatter(2, 1, 1), 4);
    assert.strictEqual(expressionMatter(1, 1, 1), 3);
    assert.strictEqual(expressionMatter(1, 2, 3), 9);
    assert.strictEqual(expressionMatter(1, 3, 1), 5);
    assert.strictEqual(expressionMatter(2, 2, 2), 8);
  });

  it("Medium values", function () {
    assert.strictEqual(expressionMatter(5, 1, 3), 20);
    assert.strictEqual(expressionMatter(3, 5, 7), 105);
    assert.strictEqual(expressionMatter(5, 6, 1), 35);
    assert.strictEqual(expressionMatter(1, 6, 1), 8);
    assert.strictEqual(expressionMatter(2, 6, 1), 14);
    assert.strictEqual(expressionMatter(6, 7, 1), 48);
  });

  it("Mixed values", function () {
    assert.strictEqual(expressionMatter(2, 10, 3), 60);
    assert.strictEqual(expressionMatter(1, 8, 3), 27);
    assert.strictEqual(expressionMatter(9, 7, 2), 126);
    assert.strictEqual(expressionMatter(1, 1, 10), 20);
    assert.strictEqual(expressionMatter(9, 1, 1), 18);
    assert.strictEqual(expressionMatter(10, 5, 6), 300);
    assert.strictEqual(expressionMatter(1, 10, 1), 12);
  });
});