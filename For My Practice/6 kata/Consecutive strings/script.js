// my solution
function longestConsec(strarr, k) {
  // Check for edge cases: empty array, k greater than array length, or k <= 0
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  let longestString = ""; // Initialize the variable to store the longest string

  // Iterate over each index up to (array length - k + 1)
  for (let i = 0; i < strarr.length - k + 1; i++) {
    const currentString = strarr.slice(i, i + k).join(""); // Get the consecutive strings by slicing and joining

    // Update the longestString if the currentString is longer
    if (currentString.length > longestString.length) {
      longestString = currentString;
    }
  }

  return longestString; // Return the first longest string consisting of k consecutive strings
}



// other solutions
function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

//

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join("");
    return currString.length > long.length ? currString : long;
  }, "");
}

//

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }

  return strarr
    .map((value, index) => strarr.slice(index, index + k).join(""))
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}




// test

const { assert } = require("chai");

describe("longestConsec", function () {
  it("Basic tests", function () {
    assert.strictEqual(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
      "abigailtheta"
    );
    assert.strictEqual(
      longestConsec(
        [
          "ejjjjmmtthh",
          "zxxuueeg",
          "aanlljrrrxx",
          "dqqqaaabbb",
          "oocccffuucccjjjkkkjyyyeehh",
        ],
        1
      ),
      "oocccffuucccjjjkkkjyyyeehh"
    );
    assert.strictEqual(longestConsec([], 3), "");
    assert.strictEqual(
      longestConsec(
        [
          "itvayloxrp",
          "wkppqsztdkmvcuwvereiupccauycnjutlv",
          "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
        ],
        2
      ),
      "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
    );
    assert.strictEqual(
      longestConsec(
        ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"],
        2
      ),
      "wlwsasphmxxowiaxujylentrklctozmymu"
    );
    assert.strictEqual(
      longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2),
      ""
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
      "ixoyx3452zzzzzzzzzzzz"
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15),
      ""
    );
    assert.strictEqual(
      longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0),
      ""
    );
  });
});
