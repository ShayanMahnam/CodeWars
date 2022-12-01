//My Solution
function checkAlive(health) {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
}
//Other answers
function checkAlive(health) {
  return health > 0;
}
//
const checkAlive = (health) => health > 0;
//
function checkAlive(health) {
  return health > 0 ? true : false;
}
//Sample Tests

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(checkAlive(5), true);
    Test.assertEquals(checkAlive(0), false);
  });
});
