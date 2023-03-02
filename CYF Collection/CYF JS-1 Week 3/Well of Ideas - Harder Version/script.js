// my solution
function well(x) {
  const n = []
    .concat(...x)
    .filter((el) => (el + "").toLowerCase() === "good").length;
  return n > 2 ? "I smell a series!" : n > 0 ? "Publish!" : "Fail!";
}



//Other solutions
function well(x) {
  let match = ("" + x).match(/good/gi) || [];
  if (match.length == 0) return "Fail!";
  if (match.length <= 2) return "Publish!";
  return "I smell a series!";
}
//
function well(x) {
  var count = 0;
  x.forEach(function (arr) {
    arr.forEach(function (elem) {
      if (typeof elem === "string" && elem.toLowerCase() === "good") {
        count++;
      }
    });
  });
  if (count === 0) {
    return "Fail!";
  }
  return count > 2 ? "I smell a series!" : "Publish!";
}
//
function well(x) {
  const $ = x.toString().toLowerCase().split(/good/g).length - 1;
  return $ > 2 ? "I smell a series!" : $ > 0 ? "Publish!" : "Fail!";
}
//
function well(x) {
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (`${x[i][j]}`.toLowerCase() == "good") {
        count += 1;
      }
    }
  }
  return count < 1 ? "Fail!" : count <= 2 ? "Publish!" : "I smell a series!";
}

//

function well(x) {
  const words = x
    .flat()
    .filter((element) => (element + "").toLowerCase() === "good").length;
  return words > 2 ? "I smell a series!" : words > 0 ? "Publish!" : "Fail!";
}



//Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Well of Ideas - Harder Version", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
    assert.deepEqual(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
    assert.deepEqual(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
  });
});