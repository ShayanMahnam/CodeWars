//My Solution
function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}
//correct answers
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}
//
function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`;
}
//
const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");
//Sample Tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(greet("Daniel", "Daniel"), "Hello boss");
    Test.assertEquals(greet("Greg", "Daniel"), "Hello guest");
  });
});
