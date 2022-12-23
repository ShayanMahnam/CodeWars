// my solution

function removeExclamationMarks(s) {
  return s.replaceAll("!", "");
}


// other solutions


function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

//

let removeExclamationMarks = (s) => s.replace(/!/g, "");

//

function removeExclamationMarks(s) {
  var arr = s.split("");
  arr = arr.filter(function (e) {
    return e !== "!";
  });
  return arr.join("");
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});
