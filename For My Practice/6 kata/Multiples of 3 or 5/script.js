// my solution

function solution(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(i);
  }

  return arr
    .filter((x) => x % 3 === 0 || x % 5 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}


// other solutions

function solution(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

//

function solution(number) {
  return number < 1 ? 0 : [...new Array(number).keys()]
        .filter((n) => n % 3 == 0 || n % 5 == 0)
        .reduce((a, b) => a + b);
}

//
solution = (n) =>
  n <= 0
    ? 0
    : Array.from({ length: n }, (_, i) =>
        i % 3 == 0 || i % 5 == 0 ? i : 0
      ).reduce((x, y) => x + y);

//

solution = (n) => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? (i % 5 ? 0 : i) : i;
  return s;
};


// test

const { assert } = require("chai");

function test(n, expected) {
  it(`n=${n}`, () => {
    let actual = solution(n);
    assert.strictEqual(actual, expected);
  });
}

describe("basic tests", function () {
  test(10, 23);
});