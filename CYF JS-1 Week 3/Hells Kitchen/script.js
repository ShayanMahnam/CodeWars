// my solution
const ramsify = (word) =>
  [...word]
    .map((char) => {
      if ("EIOU".includes(char)) return "*";
      if (char === "A") return "@";
      return char;
    })
    .join("") + "!!!!";

const gordon = (a) =>
  a
    .toUpperCase()
    .split(" ")
    .map((word) => ramsify(word))
    .join(" ");

//Other solutions
function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, "$&!!!!")
    .replace(/[AEIOU]/g, (v) => (v == "A" ? "@" : "*"));
}
//
const gordon = (a) =>
  a
    .toUpperCase()
    .split(" ")
    .map((a) => a.replace(/A/g, "@").replace(/[EIOU]/g, "*") + "!!!!")
    .join(" ");
    //
    function gordon(s) {
      return s
        .toUpperCase()
        .replace(/\b\w+\b/g, "$&!!!!")
        .replace(/A/g, "@")
        .replace(/[UIOE]/g, "*");
    }
    //
function gordon(a) {
  const vowels = "AEIOU";
  let result = "";

  for (let char of a) {
    if (vowels.includes(char.toUpperCase()) && char.toUpperCase() === "A") {
      result += "@";
    } else if (vowels.includes(char.toUpperCase())) {
      result += "*";
    } else if (char === " ") {
      result += "!!!! ";
    } else {
      result += char.toUpperCase();
    }
  }

  result += "!!!!";

  return result;
}

//Test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Hells Kitchen", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(
      gordon("What feck damn cake"),
      "WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!"
    );
    assert.strictEqual(
      gordon("are you stu pid"),
      "@R*!!!! Y**!!!! ST*!!!! P*D!!!!"
    );
    assert.strictEqual(gordon("i am a chef"), "*!!!! @M!!!! @!!!! CH*F!!!!");
  });
});