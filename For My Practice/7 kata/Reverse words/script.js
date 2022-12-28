// my solution

function reverseWords(str) {
  // Go for it
  return str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}


// other solutions
function reverseWords(str) {
  return str
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

//

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

//

function reverseWords(str) {
  let reversedWord = "";
  let reversedStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      reversedWord = str[i] + reversedWord;
    } else {
      reversedStr += reversedWord + " ";
      reversedWord = "";
    }
  }
  return reversedStr + reversedWord;
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      reverseWords("The quick brown fox jumps over the lazy dog."),
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
    assert.strictEqual(reverseWords("apple"), "elppa");
    assert.strictEqual(reverseWords("a b c d"), "a b c d");
    assert.strictEqual(
      reverseWords("double  spaced  words"),
      "elbuod  decaps  sdrow"
    );
  });
});
