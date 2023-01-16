// my solution

function makePizza(pieces) {
  //Let's make n pieces of Pizza ;-)
  var result = "";
  while (pieces--) {
    var needSteps = 5;
    while (needSteps--) result += make(needSteps);
  }
  return result;
}
function make(step) {
  switch (step + 1) {
    case 5:
      return "P";
    case 4:
      return "i";
    case 3:
    case 2:
      return "z";
    case 1:
      return "a";
  }
}


// other solutions

function makePizza(pieces) {
  //Let's make n pieces of Pizza ;-)
  var result = "";
  while (pieces--) {
    var needSteps = 5;
    while (needSteps--) result += make(needSteps + 1);
  }
  return result;
}
function make(step) {
  switch (step) {
    case 5:
      return "P";
    case 4:
      return "i";
    case 3:
    case 2:
      return "z";
    case 1:
      return "a";
  }
}



// test

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    Test.assertEquals(makePizza(1), "Pizza");

    Test.assertEquals(makePizza(2), "PizzaPizza");

    Test.assertEquals(makePizza(3), "PizzaPizzaPizza");
  });
});