// my solution

function plural(n) {
  // ...
  return n === 1 ? false : true;
}


// other solutions

function plural(n) {
  return n !== 1;
}

//

function plural(n) {
  if (n >= 0) {
    if (n == 1) {
      return false;
    } else {
      return true;
    }
  }
}



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(plural(0), true, "Plural for 0");
    Test.assertEquals(plural(0.5), true, "Plural for 0.5");
    Test.assertEquals(plural(1), false, "Plural for 1");
    Test.assertEquals(plural(100), true, "Plural for 100");
    Test.assertEquals(plural(Infinity), true, "Plural for Infinity");
  });
});
