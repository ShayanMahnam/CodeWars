// my solution

function feast(beast, dish) {
  //your function here
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}


// other solutions

function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

//

function feast(beast, dish) {
  var v1 = beast.split("").shift();
  var v2 = beast.split("").pop();
  var v3 = dish.split("").shift();
  var v4 = dish.split("").pop();
  return (v1 === v3 && v2 === v4);
}




// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(feast("great blue heron", "garlic naan"), true);
    Test.assertEquals(feast("chickadee", "chocolate cake"), true);
    Test.assertEquals(feast("brown bear", "bear claw"), false);
  });
});