// my solution

function combat(health, damage) {
  // Write your code here
  return health - damage < 0 ? 0 : health - damage;
}


// other solutions

const combat = (health, damage) => Math.max(0, health - damage);

//

function combat(health, damage) {
  if (health - damage < 0) {
    return 0;
  } else {
    return health - damage;
  }
}



// test

const Test = require("@codewars/test-compat");

describe("The combat() function", function () {
  it("should work for some example tests", function () {
    Test.assertEquals(combat(100, 5), 95);
    Test.assertEquals(combat(92, 8), 84);
    Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0");
  });
});