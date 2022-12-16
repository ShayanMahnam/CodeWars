// my solution

function spinWords(string) {
  //TODO Have fun :)
  return string
    .split(" ")
    .map((x) => (x.length > 4 ? x.split("").reverse().join("") : x))
    .join(" ");
}


// other solutions

function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}

//

function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}

//

function spinWords(str) {
  return str
    .split(" ")
    .map((w) => (w.length < 5 ? w : w.split("").reverse().join("")))
    .join(" ");
}

//

function spinWords(str) {
  return str.split(" ").map(spinSingleWord).join(" ");
}

function spinSingleWord(word) {
  return word.length > 4 ? word.split("").reverse().join("") : word;
}



// test

const chai = require("chai");
const assert = chai.assert;

describe("Spinning words", () => {
  it("Sample tests", () => {
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(
      spinWords("This is another test"),
      "This is rehtona test"
    );
    assert.strictEqual(
      spinWords("You are almost to the last test"),
      "You are tsomla to the last test"
    );
    assert.strictEqual(
      spinWords("Just kidding there is still one more"),
      "Just gniddik ereht is llits one more"
    );
    assert.strictEqual(
      spinWords("Seriously this is the last one"),
      "ylsuoireS this is the last one"
    );
  });
});