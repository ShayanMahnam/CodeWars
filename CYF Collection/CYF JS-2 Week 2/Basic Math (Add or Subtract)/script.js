// my solution

function calculate(str) {
  //your code here...
  return eval(str.replaceAll("plus", "+").replaceAll("minus", "-")).toString();
}


// other solutions

function calculate(str) {
  return eval(str.replace(/plus/gi, "+").replace(/minus/gi, "-")).toString();
}

//

function calculate(str) {
  let numbers = str.split(/plus|minus/);
  let operations = str.match(/[a-z]+/g);
  let sum = parseInt(numbers[0]);
  for (let i = 0, len = operations.length; i < len; i++) {
    switch (operations[i]) {
      case "plus":
        sum += parseInt(numbers[i + 1]);
        break;
      case "minus":
        sum -= parseInt(numbers[i + 1]);
        break;
    }
  }
  return sum + "";
}

//

function calculate(str) {
  return eval(str.split("plus").join("+").split("minus").join("-")).toString();
}



// test

const Test = require("@codewars/test-compat");

describe("Let's go...", function () {
  it("Basic tests", function () {
    Test.assertEquals(calculate("1plus2plus3plus4"), "10");
    Test.assertEquals(calculate("1minus2minus3minus4"), "-8");
    Test.assertEquals(calculate("1plus2plus3minus4"), "2");
  });
});