// my solution

function isValidWalk(walk) {
  //insert brilliant code here
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}


// other solutions

function isValidWalk(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case "n":
        dy--;
        break;
      case "s":
        dy++;
        break;
      case "w":
        dx--;
        break;
      case "e":
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

//

function isValidWalk(walk) {
  return (
    walk.length == 10 &&
    !walk.reduce(function (w, step) {
      return w + { n: -1, s: 1, e: 99, w: -99 }[step];
    }, 0)
  );
}

//




// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    //some test cases for you...
    assert.isTrue(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return true"
    );
    assert.isFalse(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      "should return false"
    );
    assert.isFalse(isValidWalk(["w"]), "should return false");
    assert.isFalse(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      "should return false"
    );
  });
});
