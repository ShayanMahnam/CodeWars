// my solution

String.prototype.toJadenCase = function toJadenCase(str) {
  //...
  var newStr = "";

  this.split(" ").forEach(function (s) {
    newStr = newStr + " " + s.substring(0, 1).toUpperCase() + s.substring(1);
  });

  return newStr.substr(1);
};


// other solutions

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};

//

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};

//
//best one
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    var str = "How can mirrors be real if our eyes aren't real";
    Test.assertEquals(
      str.toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
