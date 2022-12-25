// my solution

function alphabetPosition(text) {
  return [...text]
    .map((a) => parseInt(a, 36) - 9)
    .filter((a) => a > 0)
    .join(" ");
}


// other solutions

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }

  return result.slice(0, result.length - 1);
}

//
let alphabetPosition = (text) =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map((ch) => ch.charCodeAt(0) - 64)
    .join(" ");

///

function alphabetPosition(text) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
}


// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      alphabetPosition("The sunset sets at twelve o' clock."),
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
    );
    Test.assertEquals(
      alphabetPosition("The narwhal bacons at midnight."),
      "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
    );
  });
});
