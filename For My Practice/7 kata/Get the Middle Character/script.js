// my solution

function getMiddle(s) {
  let length = s.length;
  let middle = Math.floor(s.length / 2);

  if (length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}


// other solutions

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

//

function getMiddle(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

//

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}



// test

const Test = require("@codewars/test-compat");

describe("GetMiddle", function () {
  it("Tests", function () {
    Test.assertEquals(getMiddle("test"), "es");
    Test.assertEquals(getMiddle("testing"), "t");
    Test.assertEquals(getMiddle("middle"), "dd");
    Test.assertEquals(getMiddle("A"), "A");
  });
});