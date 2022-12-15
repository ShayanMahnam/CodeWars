// my solution

const stringToNumber = function (str) {
  // put your code here
  return Number(str);
};


// other solutions


let stringToNumber2 = function (str) {
  return parseInt(str);
};

//

var stringToNumber3 = function (str) {
  return +str;
};

//

const stringToNumber4 = (str) => Number(str);

// test

const Test = require("@codewars/test-compat");

describe("stringToNumber", function () {
  it("should work for the examples", function () {
    Test.assertEquals(stringToNumber("1234"), 1234);
    Test.assertEquals(stringToNumber("605"), 605);
    Test.assertEquals(stringToNumber("1405"), 1405);
    Test.assertEquals(stringToNumber("-7"), -7);
  });
});