// my solution

function openOrSenior(data) {
  // ...
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    data[i][0] >= 55 && data[i][1] > 7 ? arr.push("Senior") : arr.push("Open");
  }
  return arr;
}


// other solutions

function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}

//

function openOrSenior(data) {
  function determineMembership(member) {
    return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
  }
  return data.map(determineMembership);
}

//

function openOrSenior(data) {
  return data.map(function (d) {
    return d[0] >= 55 && d[1] > 7 ? "Senior" : "Open";
  });
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Fixed tests", () => {
    assert.deepEqual(
      openOrSenior([
        [45, 12],
        [55, 21],
        [19, -2],
        [104, 20],
      ]),
      ["Open", "Senior", "Open", "Senior"]
    );
    assert.deepEqual(
      openOrSenior([
        [3, 12],
        [55, 1],
        [91, -2],
        [53, 23],
      ]),
      ["Open", "Open", "Open", "Open"]
    );
    assert.deepEqual(
      openOrSenior([
        [59, 12],
        [55, -1],
        [12, -2],
        [12, 12],
      ]),
      ["Senior", "Open", "Open", "Open"]
    );
  });
});
