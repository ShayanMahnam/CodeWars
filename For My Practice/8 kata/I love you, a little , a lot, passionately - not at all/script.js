// my solution

function howMuchILoveYou(nbPetals) {
  // your code
  return [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ][(nbPetals - 1) % 6];
}



// other solutions

const phrases = [
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly",
  "not at all",
];

function howMuchILoveYou(n) {
  return phrases[(n - 1) % phrases.length];
}

//

function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
  };
  return phrase[nbPetals % 6];
}

//

const howMuchILoveYou = (n) =>
  ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][
    n % 6
  ];




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("howMuchILoveYou", function () {
  it("Basic tests", function () {
    assert.strictEqual(howMuchILoveYou(7), "I love you");
    assert.strictEqual(howMuchILoveYou(3), "a lot");
    assert.strictEqual(howMuchILoveYou(6), "not at all");
  });
});
