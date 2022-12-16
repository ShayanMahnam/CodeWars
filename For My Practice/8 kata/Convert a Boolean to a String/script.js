// my solution

function booleanToString(b) {
  //your code here
  if (b) {
    return `true`;
  }
  return `false`;
}


// other solutions

function booleanToString(b) {
  return b.toString();
}

//

function booleanToString(b) {
  return b ? "true" : "false";
}

//

function booleanToString(b) {
  return String(b);
}

//

function booleanToString(b) {
  return `${b}`;
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      booleanToString(true),
      "true",
      'When we pass in true, we want the string "true" as output'
    );
    Test.assertEquals(
      booleanToString(false),
      "false",
      'When we pass in false, we want the string "false" as output'
    );
  });
});
