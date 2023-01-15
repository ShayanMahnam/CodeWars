// my solution

function capitalizeWord(word) {
  let firstLetter = word[0].toUpperCase();
  return firstLetter + word.slice(1);
}


// other solutions

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

//

const capitalizeWord = (word) =>
  word.replace(word.charAt(0), word.charAt(0).toUpperCase());


// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertSimilar(capitalizeWord("word"), "Word");
    Test.assertSimilar(capitalizeWord("i"), "I");
    Test.assertSimilar(capitalizeWord("glasswear"), "Glasswear");
  });
});
