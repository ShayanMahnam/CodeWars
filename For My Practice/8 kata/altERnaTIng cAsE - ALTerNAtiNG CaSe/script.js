// my solution
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("")
    .map((item) =>
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    .join("");
};



// other solutions
String.prototype.toAlternatingCase = function () {
  new_str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    } else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
};

//

const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) =>
  isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();

String.prototype.toAlternatingCase = function () {
  return [...this].map(swapCase).join("");
};

//
String.prototype.toAlternatingCase = function () {
  return this.replace(/./g, function (match) {
    return /[a-z]/.test(match) ? match.toUpperCase() : match.toLowerCase();
  });
};

//

String.prototype.toAlternatingCase = function () {
  return this.replace(/[a-z]/gi, (val) =>
    val < `a` ? val.toLowerCase() : val.toUpperCase()
  );
};




// test
const { assert } = require("chai");

describe("String.prototype.toAlternatingCase", () => {
  it("should work for fixed tests (provided in the description)", () => {
    assert.strictEqual("hello world".toAlternatingCase(), "HELLO WORLD");
    assert.strictEqual("HELLO WORLD".toAlternatingCase(), "hello world");
    assert.strictEqual("hello WORLD".toAlternatingCase(), "HELLO world");
    assert.strictEqual("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
    assert.strictEqual("12345".toAlternatingCase(), "12345");
    assert.strictEqual("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
    assert.strictEqual(
      "String.prototype.toAlternatingCase".toAlternatingCase(),
      "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
    );
    assert.strictEqual(
      "Hello World".toAlternatingCase().toAlternatingCase(),
      "Hello World"
    );
  });
});