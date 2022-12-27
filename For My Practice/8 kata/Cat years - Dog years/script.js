// my solution

var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let dogYears = 0;
  let catYears = 0;
  for (let i = 1; i <= humanYears; i++) {
    i === 1 ? (catYears += 15) : i === 2 ? (catYears += 9) : (catYears += 4);
    i === 1 ? (dogYears += 15) : i === 2 ? (dogYears += 9) : (dogYears += 5);
  }
  return [humanYears, catYears, dogYears];
};


// other solutions

var humanYearsCatYearsDogYears = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};

//

const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;

  for (let i = 1; i <= humanYears; i++) {
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
};

//

const humanYearsCatYearsDogYears = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];

//

function humanYearsCatYearsDogYears(humanYears) {
  switch (humanYears) {
    case 1:
      return [1, 15, 15];
    case 2:
      return [2, 24, 24];
    default:
      return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
  }
}



// test

const Test = require("@codewars/test-compat");

describe("Example Tests", function () {
  it("one", function () {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1, 15, 15]);
  });

  it("two", function () {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2, 24, 24]);
  });

  it("ten", function () {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10, 56, 64]);
  });
});

