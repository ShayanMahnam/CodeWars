// my solution

function noSpace(x) {
  return x.replace(/ /g, "");
}


// other solutions

function noSpace(x) {
  return x.replace(/\s/g, "");
}

//

function noSpace(x) {
  return x.split(" ").join("");
}

//

function noSpace(x) {
  var result = "";
  for (var index = 0; index < x.length; index++) {
    if (x[index] !== " ") {
      result += x[index];
    }
  }
  return result;
}

//

const noSpace = (x) => x.split(" ").join("");



// test
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic tests", () => {
  it("Fixed Tests", () => {
    assert.strictEqual(
      noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"),
      "8j8mBliB8gimjB8B8jlB"
    );
    assert.strictEqual(
      noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"),
      "88Bifk8hB8BB8BBBB888chl8BhBfd"
    );
    assert.strictEqual(noSpace("8aaaaa dddd r     "), "8aaaaaddddr");
  });
});