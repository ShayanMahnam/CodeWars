// my solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}


// other solutions


disemvowel = (str) => str.replace(/[aeiou]/gi, "");
//

function disemvowel(str) {
  return (str || "").replace(/[aeiou]/gi, "");
}

//

const vowels = "aeiou";

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}
//

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u"];

  return str
    .split("")
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    })
    .join("");
}


// test

const { assert } = require("chai");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      disemvowel("This website is for losers LOL!"),
      "Ths wbst s fr lsrs LL!"
    );
    assert.strictEqual(
      disemvowel(
        "No offense but,\nYour writing is among the worst I've ever read"
      ),
      "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
    );
    assert.strictEqual(
      disemvowel("What are you, a communist?"),
      "Wht r y,  cmmnst?"
    );
  });
});