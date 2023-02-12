// my solution

function ho(ho) {
  return ho ? "Ho " + ho : "Ho!";
}


// other solutions

function ho(arg) {
  return arg ? "Ho " + arg : "Ho!";
}

//

function ho() {
  if (arguments.length > 0) return "Ho " + arguments[0];
  return "Ho!";
}

//

function ho() {
  var name = arguments.callee.name,
    capitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return arguments.length > 0
    ? capitalized + " " + arguments[0]
    : capitalized + "!";
}



// test
const Test = require("@codewars/test-compat");

describe("Ho Ho Ho", function () {
  it("should write Ho Ho Ho!", function () {
    Test.assertEquals(ho(), "Ho!");
    Test.assertEquals(ho(ho()), "Ho Ho!");
    Test.assertEquals(ho(ho(ho())), "Ho Ho Ho!");
  });
});