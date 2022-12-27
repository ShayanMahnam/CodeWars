// my solution

const binaryArrayToNumber = (arr) => {
  // your code
  return parseInt(arr.join(""), 2);
};


// other solutions
function binaryArrayToNumber(s) {
  if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
    return 1;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
    return 2;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
    return 3;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
    return 4;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
    return 5;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
    return 6;
  } else if (s[0] === 0 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
    return 7;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
    return 8;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 0 && s[3] === 1) {
    return 9;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 0) {
    return 10;
  } else if (s[0] === 1 && s[1] === 0 && s[2] === 1 && s[3] === 1) {
    return 11;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 0) {
    return 12;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 0 && s[3] === 1) {
    return 13;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 0) {
    return 14;
  } else if (s[0] === 1 && s[1] === 1 && s[2] === 1 && s[3] === 1) {
    return 15;
  } else if (s[0] === 0 && s[1] === 0 && s[2] === 0 && s[3] === 0) {
    return 0;
  }
}

///

function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => (a << 1) | b);
}

//

const binaryArrayToNumber = (arr) => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
};
//

const binaryArrayToNumber = (arr) => {
  return parseInt(Number(arr.join("")), 2);
};




// test

const Test = require("@codewars/test-compat");

describe("One's and Zero's", () => {
  it("Example tests", () => {
    Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
    Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
    Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
    Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
  });
});