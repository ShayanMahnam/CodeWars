// my solution
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter((val, i, arr) => {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}



// other solutions

function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

//

function duplicateCount(text) {
  var lower = text.toLowerCase();
  var count = 0;
  var used = [];

  lower.split("").forEach(function (letter) {
    if (!used.includes(letter) && lower.split(letter).length - 1 > 1) {
      count++;
      used.push(letter);
    }
  });

  return count;
}

//

const duplicateCount = (string) => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = string.toLowerCase().split("").sort();

  // this array will house the duplicated values so we can
  // get the length of it (or the number of duplicated characters).
  let newArray = [];

  // set a loop for the array
  for (i = 0; i < newString.length; i++) {
    // if the current element equals the following element the push it to the new array AND
    // ONLY if the new array doesn't already include the current element
    if (newString[i] === newString[i + 1] && !newArray.includes(newString[i])) {
      // push elements to new array
      newArray.push(newString[i]);
    }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length;
};



// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1);
    assert.strictEqual(
      duplicateCount("Indivisibilities"),
      2,
      "characters may not be adjacent"
    );
  });
});
