// my solution

function stringy(size) {
  // your code here
  let str = "";
  for (let i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str;
}


// other solutions
const stringy = (x) => "".padStart(x, "10");

//

const stringy = (size) => "10".repeat(size).slice(0, size);

//





// test

const Test = require("@codewars/test-compat");

describe("the stringy function", function () {
  it("Should return a string", function () {
    Test.assertEquals(
      typeof stringy(3),
      "string",
      "Make sure it's a string not a number (the function is called stringy after all!)"
    );
  });

  it("Should start with a 1", function () {
    Test.assertEquals(
      stringy(3)[0],
      "1",
      "Whoops your string doesnt start with a 1?"
    );
  });

  it("Should have the correct length", function () {
    for (let i = 0; i < 10; ++i) {
      let parameter = (Math.random() * 50 + 1) | 0;
      Test.assertEquals(
        stringy(parameter).length,
        parameter,
        "Wrong length on " + parameter
      );
    }
  });
});