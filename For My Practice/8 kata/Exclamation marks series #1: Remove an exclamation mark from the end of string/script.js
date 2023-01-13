// my solution


function remove(string) {
  //coding and coding....
  let arr = string.split("");
  if (arr[arr.length - 1] === "!") {
    arr.splice(arr.length - 1, 1);
  }
  return arr.join("");
}

// other solutions

const remove = (s) => s.replace(/!$/, "");

//

function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

//
function remove(s) {
  return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}



// test
const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
  const actual = remove(input);
  strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Tests suite", function () {
  it("sample tests", function () {
    doTest("Hi!", "Hi");
    doTest("Hi!!!", "Hi!!");
    doTest("!Hi", "!Hi");
    doTest("!Hi!", "!Hi");
    doTest("Hi! Hi!", "Hi! Hi");
    doTest("Hi", "Hi");
  });
});