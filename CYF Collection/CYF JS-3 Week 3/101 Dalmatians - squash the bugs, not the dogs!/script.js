// my solution

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  let result =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number === 101
      ? dogs[3]
      : dogs[2];
  return result;
}




// other solutions
function howManyDalmatians(number) {
  if (number <= 10) {
    return "Hardly any";
  } else if (number <= 50) {
    return "More than a handful!";
  } else if (number === 101) {
    return "101 DALMATIANS!!!";
  } else {
    return "Woah that's a lot of dogs!";
  }
}

///

const dogs = [
  "Hardly any",
  "More than a handful!",
  "Woah that's a lot of dogs!",
  "101 DALMATIANS!!!",
];

const howManyDalmatians = (number) =>
  number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];


//


const dogss = [
  "Hardly any",
  "More than a handful!",
  "Woah that's a lot of dogs!",
  "101 DALMATIANS!!!",
];
const howManyDalmatians = (n) => {
  return n <= 10 ? dogss[0] : n <= 50 ? dogss[1] : n === 101 ? dogss[3] : dogss[2];
};

// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(howManyDalmatians(26), "More than a handful!");
    assert.strictEqual(howManyDalmatians(8), "Hardly any");
    assert.strictEqual(howManyDalmatians(14), "More than a handful!");
    assert.strictEqual(howManyDalmatians(80), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(100), "Woah that's a lot of dogs!");
    assert.strictEqual(howManyDalmatians(101), "101 DALMATIANS!!!");
  });
});
