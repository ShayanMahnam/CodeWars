// my solution
function order(words) {
  // ...
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}



// other solutions
function order(words) {
  var array = words.split(" ");
  var sortedArray = [];
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(" ");
}

//

function order(words) {
  return words
    .split(" ")
    .sort((a, b) => a.replace(/[^\d]/g, "") - b.replace(/[^\d]/g, ""))
    .join(" ");
}




// test
const { assert } = require("chai");

describe("order", () => {
  it("should work corectly", () => {
    assert.strictEqual(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    assert.strictEqual(
      order("4of Fo1r pe6ople g3ood th5e the2"),
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
    assert.strictEqual(order(""), "", "empty input should return empty string");
  });
});