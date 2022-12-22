// my solution
function smash (words) {
   return words.join(" ")
};



// other solutions

const smash = (words) => words.join(" ");

//

function smash (words) {
    "use strict";
    var smashed = '';
    for(var i = 0; i<words.length; i++) {
      smashed += words[i];
      if(i!=words.length-1) {
        smashed += ' ';
      }
    }
    return smashed;
};



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("smash", () => {
  it("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });

  it("Multiple words should be separated by spaces.", () => {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(
      smash(["hello", "amazing", "world"]),
      "hello amazing world"
    );
    assert.strictEqual(
      smash(["this", "is", "a", "really", "long", "sentence"]),
      "this is a really long sentence"
    );
  });
});
