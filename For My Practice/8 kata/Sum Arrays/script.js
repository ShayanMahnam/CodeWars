// my solution

// Sum Numbers
function sum (numbers) {
    return numbers.reduce((a,b) => a + b,0)
    
    
};


// other solutions

sum = function (numbers) {
  "use strict";
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

//

const sum = (n) => n.reduce((a, b) => a + b, 0);

//





// test

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(sum([]), 0);
    Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});
