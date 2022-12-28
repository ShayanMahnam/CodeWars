// my solution

function isPalindrome(x) {
  // your code here
  // transform the input string to lowercase
  const lowercaseInput = x.toLowerCase();

  // to have a similar wording
  const forward = lowercaseInput;

  // get the backward version of the lowercase string
  const backward = lowercaseInput.split("").reverse().join("");

  // check if the forward string is the same as the backward string
  return forward === backward;
}


// other solutions
const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase()
    ? true
    : false;
};

//

const isPalindrome = (x) =>
  x.toLowerCase() === x.toLowerCase().split("").reverse().join("");



// test

const { assert } = require("chai");

describe("Fixed tests", function () {
  it("Testing for 'a'", () => assert.strictEqual(isPalindrome("a"), true));
  it("Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true));
  it("Testing for 'Abba'", () =>
    assert.strictEqual(isPalindrome("Abba"), true));
  it("Testing for 'hello'", () =>
    assert.strictEqual(isPalindrome("hello"), false));
  it("Testing for 'Bob'", () => assert.strictEqual(isPalindrome("Bob"), true));
  it("Testing for 'Madam'", () =>
    assert.strictEqual(isPalindrome("Madam"), true));
  it("Testing for 'AbBa'", () =>
    assert.strictEqual(isPalindrome("AbBa"), true));
  it("Testing for ''", () => assert.strictEqual(isPalindrome(""), true));
});