// my solution

function numberToString(num) {
  // Return a string of the number here!
  return `${num}`;
}


// other solutions

function numberToString(num) {
  return num.toString();
}
//

function numberToString(num) {
  // Return a string of the number here!
  return String(num);
}
//

function numberToString(num) {
  return "" + num;
}

//

const numberToString = (num) => `${num}`;



// test
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
