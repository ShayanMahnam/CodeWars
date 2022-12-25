// my solution
function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return Number(inputString[0]);
}



// other solutions
function getAge(inputString) {
  return parseInt(inputString);
}

//

const getAge = parseInt;


//

function getAge(inputString) {
  return +inputString[0];
}

//

function getAge(inputString) {
  switch (inputString) {
    case "1 years old":
      return 1;
    case "2 years old":
      return 2;
    case "3 years old":
      return 3;
    case "4 years old":
      return 4;
    case "5 years old":
      return 5;
    case "6 years old":
      return 6;
    case "7 years old":
      return 7;
    case "8 years old":
      return 8;
    case "9 years old":
      return 9;
    default:
      return 1;
  }
}


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(getAge("4 years old"), 4);
  });
});