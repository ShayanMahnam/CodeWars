// my solution

function strCount(str, letter) {
  //code here
  return str.split(letter).length - 1;
}


// other solutions
function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

//

function strCount(str, letter) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) count++;
  }

  return count;
}

//

function strCount(str, letter) {
  return str.length - str.replace(new RegExp(letter, "gi"), "").length;
}




// test

const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount("Hello", "o"), 1);
    assert.strictEqual(strCount("Hello", "l"), 2);
    assert.strictEqual(strCount("", "z"), 0);
  });
});
