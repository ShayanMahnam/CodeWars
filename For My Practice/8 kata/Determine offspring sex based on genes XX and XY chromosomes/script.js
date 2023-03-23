// my solution

function chromosomeCheck(sperm) {
  return sperm === "XY"
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}


// other solutions

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === "XY" ? "son" : "daughter"
  }.`;
}

//

function chromosomeCheck(sperm) {
  if (sperm == "XY") {
    return "Congratulations! You're going to have a son.";
  }

  return "Congratulations! You're going to have a daughter.";
}


// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      chromosomeCheck("XY"),
      "Congratulations! You're going to have a son."
    );
    Test.assertEquals(
      chromosomeCheck("XX"),
      "Congratulations! You're going to have a daughter."
    );
  });
});
