// my solution

function createPhoneNumber(numbers) {
  let firstThreeNum = numbers.slice(0, 3);
  let secondThreeNum = numbers.slice(3, 6);
  let lastNum = numbers.slice(6, numbers.length);

  return `(${firstThreeNum.join("")}) ${secondThreeNum.join("")}-${lastNum.join(
    ""
  )}`;
}


// other solutions

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";

  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }

  return format;
}

//

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ") " +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

//

function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(...)(...)(.*)/, "($1) $2-$3");
}

//

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}

//

function createPhoneNumber(numbers) {
  var n = numbers;
  return (
    "(" +
    n[0] +
    n[1] +
    n[2] +
    ") " +
    n[3] +
    n[4] +
    n[5] +
    "-" +
    n[6] +
    n[7] +
    n[8] +
    n[9]
  );
}


//

function createPhoneNumber(numbers) {
  return (
    "(" +
    numbers.slice(0, 3).join("") +
    ") " +
    numbers.slice(3, 6).join("") +
    "-" +
    numbers.slice(6).join("")
  );
}



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Create Phone Number", () => {
  it("Fixed tests", () => {
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
    assert.strictEqual(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111"
    );
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
  });
});