// my solution

function well(x) {
  let goodCount = x.filter((x) => x == "good").length;
  return goodCount < 1
    ? "Fail!"
    : goodCount < 3
    ? "Publish!"
    : "I smell a series!";
}


// other solutions

function well(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}

//

function well(x) {
  var good = 0;

  for (var i = 0; i < x.length; ++i)
    if (x[i] == "good" && ++good > 2) return "I smell a series!";

  return good ? "Publish!" : "Fail!";
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(well(["bad", "bad", "bad"]), "Fail!");
    assert.strictEqual(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
    assert.strictEqual(
      well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
      "I smell a series!"
    );
  });
});

