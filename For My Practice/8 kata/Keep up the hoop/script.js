// my solution

function hoopCount(n) {
  //your code goes here
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}


// other solutions

function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}
//

function hoopCount(n) {
  const HOPS_LIMIT = 10;
  return n >= HOPS_LIMIT
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

//

const hoopCount = (n) =>
  n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks";



// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(hoopCount(3), "Keep at it until you get it");
    Test.assertEquals(hoopCount(11), "Great, now move on to tricks");
  });
});
