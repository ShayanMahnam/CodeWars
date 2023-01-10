// my solution

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}


// other solutions

function shortcut(str) {
  return str
    .split("")
    .filter(function (e) {
      return ["a", "e", "i", "o", "u"].indexOf(e) == -1;
    })
    .join("");
}

//

function shortcut(string) {
  return string
    .split("")
    .filter((str) => !"aeiou".includes(str))
    .join("");
}



// test

const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest("hello", "hll");
    doTest("how are you today?", "hw r y tdy?");
    doTest("complain", "cmpln");
    doTest("never", "nvr");
  });
});