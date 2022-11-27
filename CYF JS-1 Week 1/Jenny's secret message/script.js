//My Solution
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
//correct answers
function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}
//
function greet(name) {
  if (name === "Johnny") return "Hello, my love!";
  return "Hello, " + name + "!";
}
//
let greet = (name) => `Hello, ${name == "Johnny" ? "my love" : name}!`;
//Sample Tests
const Test = require("@codewars/test-compat");

describe("Jenny's greeting function", function () {
  it("should greet some people normally", function () {
    Test.assertEquals(greet("Jim"), "Hello, Jim!");
    Test.assertEquals(greet("Jane"), "Hello, Jane!");
    Test.assertEquals(greet("Simon"), "Hello, Simon!");
  });
  it("should greet Johnny a little bit more special", function () {
    Test.assertEquals(greet("Johnny"), "Hello, my love!");
  });
});
