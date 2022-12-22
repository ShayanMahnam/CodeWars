//My Solution
function basicOp(operation, value1, value2) {
  // Code
  if (operation == "+") {
    return value1 + value2;
  } else if (operation == "-") {
    return value1 - value2;
  } else if (operation == "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}
//Other answers
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}
//
function basicOp(o, a, b) {
  return eval(a + o + b);
}
//
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Operation must be one of + - * /";
  }
}
//
function basicOp(operation, value1, value2) {
  var cases = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };
  return cases[operation];
}
//
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
//Sample Tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    console.log("Basic tests\n");
    Test.assertSimilar(basicOp("+", 4, 7), 11);
    Test.assertSimilar(basicOp("-", 15, 18), -3);
    Test.assertSimilar(basicOp("*", 5, 5), 25);
    Test.assertSimilar(basicOp("/", 49, 7), 7);
  });
});