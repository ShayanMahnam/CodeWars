// my solution

// complete the function
function solution(string) {
    return string.replace(/([A-Z])/g, ' $1');
}
// ChatGPT answer \\



// other solutions
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}

//

function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

//

const solution = (string) => {
  return [...string]
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
};




// test

const chai = require("chai");
const assert = chai.assert;

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    assert.strictEqual(
      solution("camelCasing"),
      "camel Casing",
      "Unexpected result"
    );
    assert.strictEqual(
      solution("camelCasingTest"),
      "camel Casing Test",
      "Unexpected result"
    );
  });
});
