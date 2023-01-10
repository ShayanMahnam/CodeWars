// my solution

function printerError(s) {
  // your code
  var errors = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      errors++;
    }
  }
  return errors + "/" + s.length;
}


// other solutions

const printerError = (s) => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

//

var printerError = (s) => (s.match(/[n-z]/g) || []).length + "/" + s.length;

//

function printerError(s) {
  return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
}

// test
const Test = require("@codewars/test-compat");

describe("printerError", function () {
  it("Basic tests", function () {
    var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
    Test.assertEquals(printerError(s), "3/56");
  });
});