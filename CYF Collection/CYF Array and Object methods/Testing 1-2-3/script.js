// my solution
var number = function (array) {
  //your awesome code here
  if (array === []) {
    return [];
  }
  return array.map((x, i) => `${i + 1}: ${x}`);
};



// other solutions
var number = function (array) {
  return array.map(function (line, index) {
    return index + 1 + ": " + line;
  });
};

//

let number = (a) => a.map((v, i) => `${i + 1}: ${v}`);

//

var number = function (arr) {
  var newArr = [];
  if (arr.length === 0) {
    return [];
  } else {
    for (var i = 0, len = arr.length; i < len; i += 1) {
      newArr.push(i + 1 + ": " + arr[i]);
    }
  }
  return newArr;
};

//

function number(arr) {
  return arr.map((e, i) => `${++i}: ${e}`);
}




// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(number([]), [], "Empty array should return empty array");
    assert.deepEqual(
      number(["a", "b", "c"]),
      ["1: a", "2: b", "3: c"],
      "Return the correct line numbers"
    );
  });
});
