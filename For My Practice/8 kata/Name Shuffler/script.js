// my solution

function nameShuffler(str) {
  //Shuffle It
  return str.split(" ").reverse().join(" ");
}


// other solutions

function nameSuffle(str) {
  var arr = str.split(" ");
  return arr[1] + " " + arr[0];
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler("john McClane"), "McClane john");
    assert.strictEqual(nameShuffler("Mary jeggins"), "jeggins Mary");
    assert.strictEqual(nameShuffler("tom jerry"), "jerry tom");
  });
});
