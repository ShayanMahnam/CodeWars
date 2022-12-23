// my solution
function duplicateEncode(word) {
  // ...
  let newString = "";
  word = word.toLowerCase() || word;
  word.split("").filter((x, index) => {
    if (word.indexOf(x) !== index) {
      newString += ")";
    } else if (word.lastIndexOf(x) !== index) {
      newString += ")";
    } else {
      newString += "(";
    }
  });
  return newString;
}




// other solutions

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

//

function duplicateEncode(word) {
  var unique = "";
  word = word.toLowerCase();
  for (var i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}

//

function duplicateEncode(word) {
  var letters = word.toLowerCase().split("");
  return letters
    .map(function (c, i) {
      return letters.some(function (x, j) {
        return x === c && i !== j;
      })
        ? ")"
        : "(";
    })
    .join("");
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Duplicate Encoder", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(duplicateEncode("din"), "(((");
    assert.strictEqual(duplicateEncode("recede"), "()()()");
    assert.strictEqual(
      duplicateEncode("Success"),
      ")())())",
      "should ignore case"
    );
    assert.strictEqual(duplicateEncode("(( @"), "))((");
  });
});
