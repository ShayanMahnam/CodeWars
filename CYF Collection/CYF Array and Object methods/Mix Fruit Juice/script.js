// my solution
function mixFruit(arr) {
  let reg = ["banana", "orange", "apple", "lemon", "grapes"];
  let spec = ["avocado", "strawberry", "mango"];
  return Math.round(
    arr.reduce((a, b) => {
      b = b.toLowerCase();
      if (reg.includes(b)) return a + 5;
      if (spec.includes(b)) return a + 7;
      return a + 9;
    }, 0) / arr.length
  );
}




// other solutions

function mixFruit(arr) {
  var prices = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };
  return Math.round(
    arr.reduce((a, b) => (a += prices[b.toLowerCase()] || 9), 0) / arr.length
  );
}

//

function mixFruit(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (
      arr[i].toLowerCase() == "banana" ||
      arr[i].toLowerCase() == "orange" ||
      arr[i].toLowerCase() == "apple" ||
      arr[i].toLowerCase() == "lemon" ||
      arr[i].toLowerCase() == "grapes"
    )
      sum += 5;
    else if (
      arr[i].toLowerCase() == "avocado" ||
      arr[i].toLowerCase() == "strawberry" ||
      arr[i].toLowerCase() == "mango"
    )
      sum += 7;
    else sum += 9;
  }
  return Math.round(sum / arr.length);
}

//

function mixFruit(arr) {
 const fruits = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };
  return Math.round(
    arr.map((x) => fruits[x.toLowerCase()] || 9).reduce((a, b) => a + b) /
      arr.length
  );
}



// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Sample Tests", function () {
  const strictEqual = (input, expected) => {
    assert.strictEqual(
      mixFruit(input.slice()),
      expected,
      `Testing for ${JSON.stringify(input)}`
    );
  };
  it("Tests", function () {
    strictEqual(["banana", "mango", "avocado"], 6);
    strictEqual(["melon", "Mango", "kiwi"], 8);
    strictEqual(["watermelon", "cherry", "avocado"], 8);
    strictEqual(["apple", "Banana"], 5);
    strictEqual(["watermelon", "lime", "tomato"], 9);
    strictEqual(["blackBerry", "coconut", "avocado"], 8);
    strictEqual(["waterMelon", "mango"], 8);
    strictEqual(["watermelon", "pEach"], 9);
    strictEqual(["watermelon", "Orange", "grapes"], 6);
    strictEqual(["watermelon"], 9);
    strictEqual(["BlACKbeRrY", "cOcONuT", "avoCaDo"], 8);
  });
});