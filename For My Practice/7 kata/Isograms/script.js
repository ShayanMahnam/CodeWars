// my solution

function isIsogram(str) {
  //...
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i) {
    for (j = i + 1; j < str.length; ++j) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}


// other solutions

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

//

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

//

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i);
}
//

function isIsogram(str) {
  str = str.toLowerCase();

  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false;
    }
  }

  return true;
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isIsogram("Dermatoglyphics"), true);
    assert.strictEqual(isIsogram("isogram"), true);
    assert.strictEqual(
      isIsogram("aba"),
      false,
      "same chars may not be adjacent"
    );
    assert.strictEqual(
      isIsogram("moOse"),
      false,
      "same chars may not be same case"
    );
    assert.strictEqual(isIsogram("isIsogram"), false);
    assert.strictEqual(
      isIsogram(""),
      true,
      "an empty string is a valid isogram"
    );
  });
});
